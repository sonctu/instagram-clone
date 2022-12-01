import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '~/store/store';
import HomeIcon from '../Icons/HomeIcon';
import Messenger from '../Icons/Messenger';
import ReelsIcon from '../Icons/ReelsIcon';
import SearchIcon from '../Icons/SearchIcon';
import Avatar from './Avatar';

const NavbarMobile: FC = () => {
  const { currentUser } = useUserStore((state) => state);

  const navigate = useNavigate();

  const navbarList = useMemo(
    () => [
      {
        content: <HomeIcon></HomeIcon>,
        onClick: () => {
          navigate('/');
        },
      },
      {
        content: <SearchIcon></SearchIcon>,
        onClick: () => {
          navigate('/explore');
        },
      },
      {
        content: <ReelsIcon></ReelsIcon>,
        onClick: () => {
          navigate('/');
        },
      },
      {
        content: <Messenger></Messenger>,
        onClick: () => {
          navigate('/');
        },
      },
      {
        content: <Avatar size='small'></Avatar>,
        onClick: () => {
          navigate(`/profile/${currentUser?._id}/`);
        },
      },
    ],
    [currentUser?._id, navigate],
  );

  console.log(navbarList);
  return (
    <nav className='fixed bottom-0 left-0 z-50 w-full bg-white border-t border-grayPrimary'>
      <ul className='flex items-center'>
        {navbarList.map((item, index) => (
          <li
            aria-hidden
            onClick={item.onClick}
            className='flex items-center justify-center flex-1 px-4 py-3'
            key={index}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
