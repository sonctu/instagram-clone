import { ISearchUserResponse } from '~/types/auth';
import { instance } from '~/utils/instance';

export const getSearchUser = (username: string, accessToken: string) => {
  return instance.get<ISearchUserResponse>('/v1/user/search', {
    params: {
      username,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
