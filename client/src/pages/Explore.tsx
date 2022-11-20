import { FC } from 'react';
import NavbarMobile from '~/components/Common/NavbarMobile';
import ExploreLayout from '~/components/Explore/ExploreLayout';
import Search from '~/components/Explore/Search';

const Explore: FC = () => {
  return (
    <div>
      <Search></Search>
      <div className='my-[50px] flex flex-col gap-[2px] '>
        <ExploreLayout layout={true}></ExploreLayout>
        <ExploreLayout layout={false}></ExploreLayout>
      </div>
      <NavbarMobile></NavbarMobile>
    </div>
  );
};

export default Explore;
