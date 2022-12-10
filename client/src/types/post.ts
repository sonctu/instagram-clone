export interface IPosts {
  comments: [];
  createdAt: string;
  description: string;
  images: string[];
  likes: [];
  updatedAt: string;
  userId: { _id: string; fullname: string; username: string; avatar: string };
  __v: number;
  _id: string;
}

export type IPostResponse = {
  msg: string;
  data: IPosts[];
};
