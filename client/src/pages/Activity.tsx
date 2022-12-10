import { FC } from 'react';
import MainLayout from '~/layouts/MainLayout';
import HeartIcon from '~/components/Icons/HeartIcon';
import RecommendItem from '~/components/Recommend/RecommendItem';
import Heading from '~/components/Common/Heading';

const Activity: FC = () => {
  return (
    <MainLayout>
      <section>
        <Heading content='Notifications'></Heading>
        <main className='mb-12 mt-11'>
          <div className='px-10 py-8 text-sm text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 border-2 rounded-full border-graySecondary'>
              <HeartIcon width='32' height='32'></HeartIcon>
            </div>
            <div className='my-3'>Hoạt động trên bài viết của bạn</div>
            <p>
              Khi có người thích hoặc bình luận về một trong những bài viết của bạn, bạn sẽ nhìn
              thấy nó ở đây.
            </p>
            <button className='mt-3 font-semibold text-bluePrimary'>
              Chia sẻ ảnh đầu tiên của bạn
            </button>
          </div>
          <div>
            <div className='px-4 font-semibold'>Gợi ý cho bạn</div>
            <div>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
              <RecommendItem></RecommendItem>
            </div>
            <div className='px-4 py-2 text-sm font-medium text-center cursor-pointer text-bluePrimary'>
              Xem tất cả gợi ý
            </div>
          </div>
        </main>
      </section>
    </MainLayout>
  );
};

export default Activity;
