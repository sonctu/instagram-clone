import { FC } from 'react';
import ExploreLayout from '~/components/Explore/ExploreLayout';
import Search from '~/components/Explore/Search';
import MainLayout from '~/layouts/MainLayout';

const Explore: FC = () => {
  return (
    <MainLayout>
      <Search></Search>
      <div className='my-[50px] flex flex-col gap-[2px] '>
        <ExploreLayout layout={true}></ExploreLayout>
        <ExploreLayout layout={false}></ExploreLayout>
      </div>
    </MainLayout>
  );
};

export default Explore;
