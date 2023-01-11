import { useQueries } from '@tanstack/react-query';
import { FC } from 'react';
import ModalLayout from '~/layouts/ModalLayout';
import { getUser } from '~/services/user';
import { useFollowStore } from '~/store/store';
import { IPropsModal } from '~/types/modal';
import Avatar from '../Common/Avatar';
import RecommendItem from '../Recommend/RecommendItem';

const ModalFollowers: FC<IPropsModal> = ({ handleCloseModal, openModal }) => {
  const { followers } = useFollowStore((state) => state);

  const queryResults = useQueries({
    queries: followers.map((id) => ({
      queryKey: ['user', id],
      queryFn: () => getUser(id),
    })),
  });
  return (
    <ModalLayout handleCloseModal={handleCloseModal} openModal={openModal}>
      <div className={`animation transition-all ${openModal ? 'scale-100' : 'scale-105'}`}>
        <div className='min-w-[348px] sm:min-w-[400px] max-h-[400px] rounded-2xl overflow-y-scroll scrollbar-hide relative bg-white'>
          <div className='fixed top-0 left-0 w-full py-2 font-medium text-center bg-white border-b rounded-tr-2xl rounded-tl-2xl border-grayPrimary'>
            Followers
          </div>
          <div className='pt-12 pb-3'>
            {queryResults.length > 0 && (
              <div className='flex flex-col items-center justify-center mt-2 mb-4'>
                {queryResults.map((query, index) => {
                  const user = query.data?.data;
                  return (
                    <div
                      key={index}
                      className='flex items-center justify-between px-4 py-2 text-sm h-[65px] w-full'
                    >
                      <div className='flex items-center gap-2 truncate'>
                        <Avatar size='large' url={user?.avatar}></Avatar>
                        <div className='flex flex-col truncate'>
                          <h4 className='font-semibold'>{user?.username}</h4>
                          <div className='text-grayText'>{user?.fullname}</div>
                          <div className='text-xs truncate text-grayText'>
                            Có khanhvyccf + 1 người nữa theo dõi
                          </div>
                        </div>
                      </div>
                      <button className='px-4 py-2 font-medium text-white rounded-md shrink-0 bg-bluePrimary'>
                        Unfollow
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            <div className='px-4 font-semibold'>Gợi ý cho bạn</div>
            <div className='flex flex-col items-center justify-center mt-2'>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalFollowers;
