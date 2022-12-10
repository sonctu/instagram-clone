import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Common/Button';
import ChevronDown from '~/components/Icons/ChevronDown';
import ChevronLeft from '~/components/Icons/ChevronLeft';
import NewMessIcon from '~/components/Icons/NewMessIcon';

const Inbox: FC = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 z-50 w-full bg-white'>
        <div className='flex items-center justify-between px-4 border-b h-11 border-grayPrimary'>
          <Link to='/'>
            <ChevronLeft></ChevronLeft>
          </Link>
          <div className='flex items-center gap-1'>
            <h3 className='font-semibold text-graySecondary'>anhson1204</h3>
            <ChevronDown></ChevronDown>
          </div>
          <div>
            <NewMessIcon></NewMessIcon>
          </div>
        </div>
      </div>
      <div className='h-screen pt-11'>
        <div className='flex flex-col items-center justify-center h-full gap-3'>
          <div className='text-xl'>Không có tin nhắn</div>
          <Button>Gửi tin nhắn</Button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
