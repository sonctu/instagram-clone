import { FC } from 'react';
import ModalLayout from '~/layouts/ModalLayout';
import { IPropsModal } from '~/types/modal';
import Button from '../Common/Button';
import FileIcon from '../Icons/FileIcon';

const ModalAddPost: FC<IPropsModal> = ({ openModal, handleCloseModal }) => {
  return (
    <ModalLayout openModal={openModal} handleCloseModal={handleCloseModal}>
      <div className={`animation transition-all ${openModal ? 'scale-100' : 'scale-105'}`}>
        <div className='bg-white  rounded-2xl'>
          <div className='py-2 font-medium text-center border-b border-grayPrimary'>
            Tạo bài viết mới
          </div>
          <div className='flex flex-col items-center p-6 h-[348px] justify-center'>
            <FileIcon></FileIcon>
            <div className='my-4 text-xl'>Kéo ảnh và video vào đây</div>
            <Button>Chọn từ máy ảnh</Button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalAddPost;
