export interface FormState {
  email: string;
  password: string;
  fullname: string;
  username: string;
}

export type FormStateLogin = Pick<FormState, 'email' | 'password'>;

export interface IUser {
  address: string;
  avatar: string;
  email: string;
  followers: [];
  followings: [];
  fullname: string;
  gender: string;
  mobile: string;
  password: string;
  role: string;
  story: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  website: string;
  __v: number;
  _id: string;
}

export interface IUserResponse {
  msg: string;
  data: IUser;
  accessToken: string;
}

export type ISearchUser = Pick<IUser, '_id' | 'avatar' | 'fullname' | 'username'>;
export interface ISearchUserResponse {
  msg: string;
  data: ISearchUser[];
}
