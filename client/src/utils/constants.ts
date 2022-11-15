export const getIsLogin = () => {
  const isLogin: boolean = JSON.parse(localStorage.getItem('login') as string);
  return isLogin;
};
