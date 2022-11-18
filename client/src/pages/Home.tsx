import { FC } from 'react';
import Header from '~/components/Common/Header';
import { useCookies } from 'react-cookie';
import { useUserStore } from '~/store/store';
import { logoutUser } from '~/services/auth';
import Menu from '~/components/Home/Menu';
import PostList from '~/components/Home/PostList';
import NavbarMobile from '~/components/Common/NavbarMobile';
import Button from '~/components/Form/Button';

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
      <div className='mt-[46px]'>
        <Header></Header>
      </div>
      <div className='min-h-screen mb-[50px]'>
        <Menu></Menu>
        <PostList></PostList>
        <NavbarMobile></NavbarMobile>
        <Button text='Log out' type='button' onClick={handleLogout}></Button>
      </div>
    </div>
  );
};

export default Home;
