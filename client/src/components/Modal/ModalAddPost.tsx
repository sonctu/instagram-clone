import { FC } from 'react';
import ModalLayout from '~/layouts/ModalLayout';
import { useToggleModal } from '~/store/store';
import Button from '../Common/Button';
import FileIcon from '../Icons/FileIcon';

const ModalAddPost: FC = () => {
  const { openModal, handleCloseModal } = useToggleModal();
  return (
    <ModalLayout openModal={openModal} handleCloseModal={handleCloseModal}>
      <div className={`animation transition-all ${openModal ? 'scale-100' : 'scale-105'}`}>
        <div className='w-[348px] rounded-2xl bg-white'>
          <div className='py-2 font-medium text-center border-b border-grayPrimary'>
            Tạo bài viết mới
          </div>
          <div className='flex flex-col items-center p-6 h-[348px] justify-center'>
            <FileIcon></FileIcon>
            <div className='mt-4 text-xl'>Kéo ảnh và video vào đây</div>
            <Button>Chọn từ máy ảnh</Button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalAddPost;
