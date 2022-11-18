import { FC } from 'react';
import HomeIcon from '../Icons/HomeIcon';
import Messenger from '../Icons/Messenger';
import ReelsIcon from '../Icons/ReelsIcon';
import SearchIcon from '../Icons/SearchIcon';
import Avatar from './Avatar';

const navbarList = [
  {
    content: <HomeIcon></HomeIcon>,
  },
  {
    content: <SearchIcon></SearchIcon>,
  },
  {
    content: <ReelsIcon></ReelsIcon>,
  },
  {
    content: <Messenger></Messenger>,
  },
  {
    content: <Avatar size='small'></Avatar>,
  },
];

const NavbarMobile: FC = () => {
  return (
    <nav className='fixed bottom-0 left-0 w-full bg-white border-t border-grayPrimary'>
      <ul className='flex items-center'>
        {navbarList.map((item, index) => (
          <li className='flex items-center justify-center flex-1 px-4 py-3' key={index}>
            {item.content}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
