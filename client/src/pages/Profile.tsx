import { FC } from 'react';
import Avatar from '~/components/Common/Avatar';
import ChevronDown from '~/components/Icons/ChevronDown';
import DiscoverIcon from '~/components/Icons/DiscoverIcon';
import OptionIcon from '~/components/Icons/OptionIcon';
import SettingIcon from '~/components/Icons/SettingIcon';
import MainLayout from '~/layouts/MainLayout';
import Menu from '~/components/Home/Menu';
import ReelsIcon from '~/components/Icons/ReelsIcon';
import SaveIcon from '~/components/Icons/SaveIcon';
import PostGridIcon from '~/components/Icons/PostGridIcon';
import FeedIcon from '~/components/Icons/FeedIcon';
import FeedItem from '~/components/Common/FeedItem';
import { NavLink, useParams } from 'react-router-dom';
import PostList from '~/components/Home/PostList';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '~/services/user';
import { useCookies } from 'react-cookie';

const Profile: FC = () => {
  const { model, id } = useParams();
  const [cookies] = useCookies(['accessToken']);

  const { data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id as string),
    enabled: !!id && !!cookies.accessToken,
  });

  return (
    <MainLayout>
      <section className='flex items-center justify-between px-4 py-3 border-b border-grayPrimary'>
        <SettingIcon></SettingIcon>
        <div className='flex items-center'>
          <h3 className='font-semibold text-graySecondary'>{data?.data.username}</h3>
          <ChevronDown></ChevronDown>
        </div>
        <DiscoverIcon></DiscoverIcon>
      </section>
      <section>
        <div className='px-3 py-4'>
          <div className='flex items-center'>
            <Avatar size='super'></Avatar>
            <div className='ml-4'>
              <div className='flex items-center'>
                <h2 className='mr-4 text-2xl font-light text-graySecondary'>
                  {data?.data.username}
                </h2>
                <OptionIcon></OptionIcon>
              </div>
              <div className='flex items-center gap-1 mt-4'>
                <button className='flex items-center pl-3 pr-2 py-[5px] border rounded-[4px] border-grayPrimary'>
                  <span className='text-sm font-semibold text-graySecondary'>Đang theo dõi</span>
                  <div>
                    <ChevronDown></ChevronDown>
                  </div>
                </button>
                <button className='px-3 py-[5px] text-sm font-semibold border rounded-[4px] border-grayPrimary text-graySecondary'>
                  Nhắn tin
                </button>
                <button className='p-[6px] flex items-center justify-center w-[34 px] h-[32px] border rounded-[4px] border-grayPrimary'>
                  <DiscoverIcon></DiscoverIcon>
                </button>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='text-sm font-semibold text-graySecondary'>{data?.data.fullname}</div>
            <p className='text-sm text-graySecondary'>
              📍MC ♡ YouTuber ♡ Book Author🎞 YouTube: Khánh Vy OFFICIAL 🎥 TikTok: Khánh Vy💻
              Facebook: Khánh Vy Video mới / Latest Vid 🔽
            </p>
            <div className='my-2 text-xs font-medium text-grayText'>
              Có <span className='text-graySecondary'>hoang.yennn_</span> theo dõi
            </div>
          </div>
        </div>
        <div>
          <Menu></Menu>
        </div>
      </section>
      <section className='flex items-center py-3 mt-4 text-sm border-y border-grayPrimary'>
        <div className='flex flex-col items-center flex-1'>
          <div className='font-medium text-graySecondary'>659</div>
          <div className='text-grayText'>bài viết</div>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='font-medium text-graySecondary'>721K</div>
          <div className='text-grayText'>người theo dõi</div>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='text-grayText'>Đang theo dõi</div>
          <div className='font-medium text-graySecondary'>973</div>
          <div className='text-grayText'>người dùng</div>
        </div>
      </section>
      <section className='mb-14'>
        <ul className='flex items-center border-b border-grayPrimary'>
          <li className='flex justify-center flex-1 py-[10px]'>
            <NavLink to={`/profile/${data?.data._id}/`}>
              {({ isActive }) => (
                <PostGridIcon color={isActive ? '#0095f6' : '#8e8e8e'}></PostGridIcon>
              )}
            </NavLink>
          </li>
          <li className='flex justify-center flex-1 py-[10px]'>
            <NavLink to={`/profile/${id}/feed`}>
              {({ isActive }) => <FeedIcon color={isActive ? '#0095f6' : '#8e8e8e'}></FeedIcon>}
            </NavLink>
          </li>
          <li className='flex justify-center flex-1 py-[10px]'>
            <NavLink to={`/profile/${id}/reels`}>
              {({ isActive }) => <ReelsIcon color={isActive ? '#0095f6' : '#8e8e8e'}></ReelsIcon>}
            </NavLink>
          </li>
          <li className='flex justify-center flex-1 py-[10px]'>
            <NavLink to={`/profile/${id}/tagged`}>
              {({ isActive }) => <SaveIcon color={isActive ? '#0095f6' : '#8e8e8e'}></SaveIcon>}
            </NavLink>
          </li>
        </ul>
        <div className='min-h-[200px]'>
          {!model && (
            <div className='grid grid-flow-row grid-cols-3 gap-1'>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <FeedItem key={index}></FeedItem>
                ))}
            </div>
          )}
          {model === 'feed' && <PostList></PostList>}
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
