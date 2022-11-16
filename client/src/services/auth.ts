import { FormStateLogin, FormState, IUserResponse } from '~/types/auth';
import { instance } from '~/utils/instance';

export const loginUser = ({ email, password }: FormStateLogin) => {
  return instance.post<IUserResponse>('/v1/auth/login', { email, password });
};

export const registerUser = ({ email, password, fullname, username }: FormState) => {
  return instance.post<IUserResponse>('/v1/auth/register', { email, password, fullname, username });
};

export const refreshToken = () => {
  return instance.post<IUserResponse>('/v1/auth/refreshToken');
};

export const logoutUser = (accessToken: string) => {
  return instance.post(
    '/v1/auth/logout',
    { Authorization: `Bearer ${accessToken}` },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};
