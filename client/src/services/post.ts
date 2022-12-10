import { IPostResponse } from '~/types/post';
import { instanceJWT } from '~/utils/instance';

export const getAllPosts = async () => {
  const response = await instanceJWT.get<IPostResponse>('/v1/post/');
  return response.data;
};
