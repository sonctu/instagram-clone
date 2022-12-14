import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalType, useToggleModal } from '~/store/store';
import instagram from '../../assets/instagram.png';
import HeartIcon from '../Icons/HeartIcon';
import NewsIcon from '../Icons/NewsIcon';
import PlusIcon from '../Icons/PlusIcon';
import PostIcon from '../Icons/PostIcon';

const Header: FC = () => {
  const [show, setShow] = useState(false);
  const { handleOpenModal } = useToggleModal();

  return (
    <header className='fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-white border-b border-grayPrimary'>
      <div className='h-[30px]'>
        <img src={instagram} alt='instagram' className='object-cover w-full h-full' />
      </div>

      <div className='flex gap-4'>
        <div className='relative' aria-hidden onClick={() => setShow(!show)}>
          <PlusIcon></PlusIcon>
          <div
            className={`absolute top-full translate-y-2 left-0 -translate-x-1/2 rounded-lg shadow-xl z-10 bg-white w-[110px] transition duration-300 ${
              show ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-1'
            }`}
          >
            <div
              aria-hidden
              className='flex items-center justify-between px-4 py-2'
              onClick={() => handleOpenModal(ModalType.POST_CREATOR)}
            >
              <span className='text-sm text-graySecondary'>Bài viết</span>
              <PostIcon></PostIcon>
            </div>
            <div className='flex items-center justify-between px-4 py-2'>
              <span className='text-sm text-graySecondary'>Tin</span>
              <NewsIcon></NewsIcon>
            </div>
          </div>
        </div>
        <Link to='/accounts/activity'>
          <HeartIcon></HeartIcon>
        </Link>
      </div>
    </header>
  );
};

export default Header;
