import { FC } from 'react';
import avatar from '../../assets/avatar.jpg';

interface AvatarProps {
  size?: 'big' | 'medium' | 'small';
}

const Avatar: FC<AvatarProps> = ({ size = 'medium' }) => {
  const classSize = size === 'big' ? 'w-14 h-14' : size === 'medium' ? 'w-8 h-8' : 'w-6 h-6';
  return (
    <div className={classSize}>
      <img src={avatar} alt='avatar' className='object-cover w-full h-full rounded-full' />
    </div>
  );
};

export default Avatar;
