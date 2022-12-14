import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserStore } from '~/store/store';
import HomeIcon from '../Icons/HomeIcon';
import Messenger from '../Icons/Messenger';
import ReelsIcon from '../Icons/ReelsIcon';
import SearchIcon from '../Icons/SearchIcon';
import Avatar from './Avatar';

const NavbarMobile: FC = () => {
  const { currentUser } = useUserStore((state) => state);

  const navbarList = useMemo(
    () => [
      {
        content: <HomeIcon></HomeIcon>,
        active: <HomeIcon color='#0095f6'></HomeIcon>,
        link: '/',
      },
      {
        content: <SearchIcon></SearchIcon>,
        active: <SearchIcon color='#0095f6'></SearchIcon>,
        link: '/explore',
      },
      {
        content: <ReelsIcon></ReelsIcon>,
        active: <ReelsIcon color='#0095f6'></ReelsIcon>,
        link: '/reels',
      },
      {
        content: <Messenger></Messenger>,
        active: <Messenger color='#0095f6'></Messenger>,
        link: '/direct/inbox',
      },
      {
        content: <Avatar size='small'></Avatar>,
        active: <Avatar size='small'></Avatar>,
        link: `/profile/${currentUser?._id}/`,
      },
    ],
    [currentUser?._id],
  );

  return (
    <nav className='fixed bottom-0 left-0 z-50 w-full bg-white border-t border-grayPrimary'>
      <ul className='flex items-center'>
        {navbarList.map((item, index) => (
          <li key={index} className='flex items-center justify-center flex-1'>
            <NavLink className='px-4 py-3' to={item.link}>
              {({ isActive }) => (isActive ? item.active : item.content)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
