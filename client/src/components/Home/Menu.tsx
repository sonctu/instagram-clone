import { FC } from 'react';
import MenuItem from './MenuItem';
import MenuNews from './MenuNews';

const Menu: FC = () => {
  return (
    <section className='flex gap-4 px-4 py-2 overflow-y-auto border-b bg-bgColorPrimary border-grayPrimary scrollbar-hide'>
      <MenuNews></MenuNews>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <MenuItem key={index}></MenuItem>
        ))}
    </section>
  );
};

export default Menu;
