import { IEditUser, ISearchUserResponse, IUserRes, IUserUpdateResponse } from '~/types/auth';
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

export const getUserList = async (data: string[]) => {
  const response = await Promise.all(data.map((e) => getUser(e)));
  return response;
};

export const updateUser = async ({
  userData,
  fileAvatar,
}: {
  userData: IEditUser;
  fileAvatar: string;
}) => {
  const response = await instanceJWT.put<IUserUpdateResponse>('/v1/user/', {
    ...userData,
    fileAvatar,
  });
  return response.data;
};

export const followUser = async (id: string) => {
  const response = await instanceJWT.put<IUserUpdateResponse>(`/v1/user/${id}/follow`);
  return response.data;
};

export const unfollowUser = async (id: string) => {
  const response = await instanceJWT.put<IUserUpdateResponse>(`/v1/user/${id}/unfollow`);
  return response.data;
};
