export const getIsLogin: () => boolean = () => {
  const isLogin = JSON.parse(localStorage.getItem('logged_in') as string) || false;
  return isLogin;
};
