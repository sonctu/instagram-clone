import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { refreshToken } from '../services/auth';
import cookies from './cookies';

const BASE_URL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8000';

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

const createInstanceJWT = () => {
  const newInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });
  newInstance.defaults.headers.common['Content-Type'] = 'application/json';

  newInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const accessToken = cookies.get('accessToken');
      const date = new Date();
      if (accessToken) {
        const decodedToken = jwt_decode<JwtPayload>(accessToken);
        if (decodedToken.exp && config.headers) {
          if (decodedToken?.exp * 1000 < date.getTime()) {
            const data = await refreshToken();
            cookies.set('accessToken', data.accessToken);

            (config?.headers as AxiosRequestHeaders)[
              'Authorization'
            ] = `Bearer ${data.accessToken}`;
          } else {
            (config?.headers as AxiosRequestHeaders)['Authorization'] = `Bearer ${accessToken}`;
          }
        }
      }
      return config;
    },
    (err) => Promise.reject(err),
  );
  return newInstance;
};

export const instanceJWT = createInstanceJWT();
