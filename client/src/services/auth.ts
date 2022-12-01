import { FormStateLogin, FormState, IUserResponse, IUserRefresh } from '~/types/auth';
import { instance, instanceJWT } from '~/utils/instance';

export const loginUser = async ({ email, password }: FormStateLogin) => {
  const response = await instance.post<IUserResponse>('/v1/auth/login', { email, password });
  return response.data;
};

export const registerUser = async ({ email, password, fullname, username }: FormState) => {
  const response = await instance.post<IUserResponse>('/v1/auth/register', {
    email,
    password,
    fullname,
    username,
  });
  return response.data;
};

export const reload = async () => {
  const response = await instance.post<IUserResponse>('/v1/auth/reload');
  return response.data;
};

export const refreshToken = async () => {
  const response = await instance.post<IUserRefresh>('/v1/auth/refreshToken');
  return response.data;
};

export const logoutUser = async () => {
  const response = await instanceJWT.post('/v1/auth/logout', {});
  return response.data;
};
