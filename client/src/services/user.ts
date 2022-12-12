import { IEditUser, ISearchUserResponse, IUserRes } from '~/types/auth';
import { instanceJWT } from '~/utils/instance';

export const getSearchUser = async (username: string) => {
  const response = await instanceJWT.get<ISearchUserResponse>('/v1/user/search', {
    params: {
      username,
    },
  });
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await instanceJWT.get<IUserRes>(`/v1/user/${id}`);
  return response.data;
};

export const updateUser = async (userData: IEditUser) => {
  const response = await instanceJWT.put('/v1/user/', userData);
  return response.data;
};
