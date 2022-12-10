import { FC } from 'react';
import { handleSetSize } from '~/utils/constants';
import avatar from '../../assets/avatar.jpg';

interface AvatarProps {
  size?: 'super' | 'big' | 'large' | 'medium' | 'small';
  url?: string;
}

const Avatar: FC<AvatarProps> = ({ size = 'medium', url }) => {
  const classSize = handleSetSize(size);
  return (
    <div className={classSize}>
      <img src={url || avatar} alt='avatar' className='object-cover w-full h-full rounded-full' />
    </div>
  );
};

export default Avatar;
