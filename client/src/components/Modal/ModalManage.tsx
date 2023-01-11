import { FC } from 'react';
import { useToggleModal, ModalType } from '~/store/store';
import ModalAddPost from './ModalAddPost';
import ModalFollowers from './ModalFollowers';
import ModalFollowing from './ModalFollowing';

const ModalManage: FC = () => {
  const { modalOpenList, handleCloseModal } = useToggleModal();
  return (
    <div className='hidden'>
      <ModalAddPost
        openModal={modalOpenList.includes(ModalType.POST_CREATOR)}
        handleCloseModal={() => handleCloseModal(ModalType.POST_CREATOR)}
      ></ModalAddPost>
      <ModalFollowers
        openModal={modalOpenList.includes(ModalType.FOLLOWERS_USER)}
        handleCloseModal={() => handleCloseModal(ModalType.FOLLOWERS_USER)}
      ></ModalFollowers>
      <ModalFollowing
        openModal={modalOpenList.includes(ModalType.FOLLOWINGS_USER)}
        handleCloseModal={() => handleCloseModal(ModalType.FOLLOWINGS_USER)}
      ></ModalFollowing>
    </div>
  );
};

export default ModalManage;
