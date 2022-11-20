import { FC } from 'react';
import ExplorePostIcon from '../Icons/ExplorePostIcon';

interface ExploreLayoutProps {
  layout?: boolean;
}

const ExploreLayout: FC<ExploreLayoutProps> = ({ layout = false }) => {
  return (
    <div className='grid grid-cols-3 h-[258px] gap-[2px] grid-rows-2'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`relative ${layout ? 'explore-layout' : 'explore-layout-reverse'}`}
          >
            <div className='w-full h-full'>
              <img
                src='https://vaithuhayho.com/wp-content/uploads/2022/09/anh-gai-xinh-deo-kinh-35.jpg'
                alt='explore-img'
                className='object-cover w-full h-full'
              />
            </div>
            <div className='absolute top-1 right-1'>
              <ExplorePostIcon></ExplorePostIcon>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExploreLayout;
