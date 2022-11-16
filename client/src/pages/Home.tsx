import { FC } from 'react';
import Header from '~/components/Common/Header';
import { useCookies } from 'react-cookie';
import { useUserStore } from '~/store/store';
import { logoutUser } from '~/services/auth';

const Home: FC = () => {
  const [cookies, _, removeCookie] = useCookies(['accessToken']);
  const { setCurrentUser } = useUserStore((state) => state);
  const handleLogout = async () => {
    if (cookies.accessToken) {
      await logoutUser(cookies.accessToken);
    }
    localStorage.removeItem('login');
    removeCookie('accessToken');
    setCurrentUser(null);
  };
  return (
    <div>
      <Header></Header>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;
