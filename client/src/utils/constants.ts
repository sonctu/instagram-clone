export const LOGINKEY = 'logged_in';

export const getIsLogin: () => boolean = () => {
  const isLogin = JSON.parse(localStorage.getItem(LOGINKEY) as string) || false;
  return isLogin;
};

export const funcSetCookie = (name: string, val: string) => {
  const cookies = document.cookie.split(';');
  const value = cookies.map((item) => {
    const value = item.split('=');
    if (value[0] === name) value[1] = val;
    return value;
  });
  const str = value
    .map((item) => {
      return `${item[0]}=${item[1]}`;
    })
    .join(';');
  document.cookie = str;
};

export const getCookie = (cname: string) => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
