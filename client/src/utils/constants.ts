export const LOGINKEY = 'logged_in';

export const storage = {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

export const getIsLogin: () => boolean = () => {
  const isLogin = storage.get(LOGINKEY) || false;
  return isLogin;
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
