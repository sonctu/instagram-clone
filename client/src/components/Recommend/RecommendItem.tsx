import { FC } from 'react';
import Avatar from '../Common/Avatar';

const RecommendItem: FC = () => {
  return (
    <div className='flex items-center justify-between px-4 py-2 text-sm h-[65px]'>
      <div className='flex items-center gap-2'>
        <Avatar size='large'></Avatar>
        <div className='flex flex-col'>
          <h4 className='font-semibold'>trantieuvy_20</h4>
          <div className='text-grayText'>Trâm Ngô</div>
          <div className='text-xs text-grayText'>Có khanhvyccf + 1 người nữa theo dõi</div>
        </div>
      </div>
      <button className='px-4 py-2 font-medium text-white rounded-md bg-bluePrimary'>
        Theo dõi
      </button>
    </div>
  );
};

export default RecommendItem;
