import { FC } from 'react';

interface AvatarGradientProps {
  size?: 'big' | 'medium' | 'small';
}
const AvatarGradient: FC<AvatarGradientProps> = ({ size = 'medium' }) => {
  const classSize =
    size === 'big'
      ? 'w-[66px] h-[66px]'
      : size === 'medium'
      ? 'w-[42px] h-[42px]'
      : 'w-[34px] h-[34px]';
  return (
    <div className={`relative ${classSize}`}>
      <div className='absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full w-[calc(100%-10px)] h-[calc(100%-10px)] top-1/2 left-1/2'>
        <img
          src='https://vaithuhayho.com/wp-content/uploads/2022/09/anh-gai-xinh-deo-kinh-35.jpg'
          alt='avatar'
          className='object-cover w-full h-full rounded-full'
        />
      </div>
      <div className='absolute w-full h-full rounded-full avatar'></div>
      <div className='w-[calc(100%-4px)] h-[calc(100%-4px)] bg-white absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  );
};

export default AvatarGradient;
