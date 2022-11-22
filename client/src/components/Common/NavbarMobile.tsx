import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';
import Messenger from '../Icons/Messenger';
import ReelsIcon from '../Icons/ReelsIcon';
import SearchIcon from '../Icons/SearchIcon';
import Avatar from './Avatar';

const navbarList = [
  {
    content: <HomeIcon></HomeIcon>,
    path: '/',
  },
  {
    content: <SearchIcon></SearchIcon>,
    path: '/explore',
  },
  {
    content: <ReelsIcon></ReelsIcon>,
    path: '/',
  },
  {
    content: <Messenger></Messenger>,
    path: '/',
  },
  {
    content: <Avatar size='small'></Avatar>,
    path: '/profile/anhson',
  },
];

const NavbarMobile: FC = () => {
  const navigate = useNavigate();
  return (
    <nav className='fixed bottom-0 left-0 z-50 w-full bg-white border-t border-grayPrimary'>
      <ul className='flex items-center'>
        {navbarList.map((item, index) => (
          <li
            aria-hidden
            onClick={() => navigate(item.path)}
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
