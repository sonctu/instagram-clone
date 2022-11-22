import { FC } from 'react';
import AvatarGradient from '../Common/AvatarGradient';
import CommentIcon from '../Icons/CommentIcon';
import HeartIcon from '../Icons/HeartIcon';
import OptionIcon from '../Icons/OptionIcon';
import SaveIcon from '../Icons/SaveIcon';
import ShareIcon from '../Icons/ShareIcon';

const PostItem: FC = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-2'>
          <div>
            <AvatarGradient size='medium'></AvatarGradient>
          </div>
          <div className='flex flex-col text-graySecondary'>
            <h3 className='text-sm font-semibold'>khanhvyccf</h3>
            <span className='inline-block text-xs'>Singapore</span>
          </div>
        </div>
        <div className='post-left'>
          <OptionIcon></OptionIcon>
        </div>
      </div>
      <div className='w-full h-[125%]'>
        <img
          src='https://vaithuhayho.com/wp-content/uploads/2022/09/anh-gai-xinh-deo-kinh-35.jpg'
          alt='post-img'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='px-4 mb-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3 py-3'>
            <HeartIcon></HeartIcon>
            <CommentIcon></CommentIcon>
            <ShareIcon></ShareIcon>
          </div>
          <div>
            <SaveIcon></SaveIcon>
          </div>
        </div>
        <div className='mb-2 text-sm font-semibold text-graySecondary'>24,955 lượt thích</div>
        <div className='flex gap-2 text-sm text-graySecondary'>
          <div>
            <h3 className='inline-block mr-2 font-semibold'>khanhvyccf</h3>Cà phê, đọc sách, chuyện
            trò cùng nhau đii ✏️
          </div>
        </div>
        <div className='my-1 text-sm text-grayText'>Xem tất cả 55 bình luận</div>
        <div>
          <span className='text-grayText text-[10px] uppercase'>13 giờ trước</span>
          <span className='ml-2 text-xs font-semibold text-graySecondary'>Xem bản dịch</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
