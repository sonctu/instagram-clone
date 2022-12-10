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

export const handleSetSize = (size: string) => {
  switch (size) {
    case 'super':
      return 'w-[77px] h-[77px]';
    case 'big':
      return 'w-14 h-14';
    case 'large':
      return 'w-11 h-11';
    case 'medium':
      return 'w-8 h-8';
    case 'small':
      return 'w-6 h-6';
    default:
      return 'w-6 h-6';
  }
};
