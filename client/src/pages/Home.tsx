import { FC } from 'react';
import Header from '~/components/Common/Header';
import { useCookies } from 'react-cookie';
import { useUserStore } from '~/store/store';
import { logoutUser } from '~/services/auth';
import Menu from '~/components/Home/Menu';
import PostList from '~/components/Home/PostList';
import Button from '~/components/Form/Button';
import { LOGINKEY } from '~/utils/constants';
import MainLayout from '~/layouts/MainLayout';

const Home: FC = () => {
  const [cookies, _, removeCookie] = useCookies(['accessToken']);
  const { setCurrentUser } = useUserStore((state) => state);
  const handleLogout = async () => {
    if (cookies.accessToken) {
      await logoutUser(cookies.accessToken);
    }
    localStorage.removeItem(LOGINKEY);
    removeCookie('accessToken');
    setCurrentUser(null);
  };
  return (
    <MainLayout>
      <div className='mt-[46px]'>
        <Header></Header>
      </div>
      <div className='min-h-screen mb-[50px]'>
        <div className='px-4 py-2 border-b bg-bgColorPrimary border-grayPrimary'>
          <Menu></Menu>
        </div>
        <PostList></PostList>
        <Button text='Log out' type='button' onClick={handleLogout}></Button>
      </div>
    </MainLayout>
  );
};

export default Home;
