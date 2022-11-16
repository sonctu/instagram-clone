export const getIsLogin: () => boolean = () => {
  const isLogin = JSON.parse(localStorage.getItem('login') as string) || false;
  return isLogin;
};
