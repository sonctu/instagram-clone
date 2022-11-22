export const LOGINKEY = 'logged_in';

export const getIsLogin: () => boolean = () => {
  const isLogin = JSON.parse(localStorage.getItem(LOGINKEY) as string) || false;
  return isLogin;
};
