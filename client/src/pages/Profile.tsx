import { FC, useEffect, useMemo, useState } from 'react';
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
import { Link, NavLink, useParams } from 'react-router-dom';
import PostList from '~/components/Home/PostList';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '~/services/user';
import { useUserStore } from '~/store/store';
import { IUser } from '~/types/auth';

const Profile: FC = () => {
  const { model, id } = useParams();
  const { currentUser } = useUserStore();

  const { data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id as string),
    enabled: !!id,
  });

  const profileList = useMemo(() => [], []);

  const [follow, setFollow] = useState(false);

  const [personal, setPersonal] = useState(true);

  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    if (id === currentUser?._id) {
      setPersonal(true);
      setUserData(currentUser as IUser);
    } else {
      setPersonal(false);
      setUserData(data?.data);
    }
  }, [currentUser, data?.data, id]);
  return (
    <MainLayout>
      <section className='flex items-center justify-between px-4 py-3 border-b h-11 border-grayPrimary'>
        <SettingIcon></SettingIcon>
        <div className='flex items-center'>
          <h3 className='font-semibold text-graySecondary'>{userData?.username}</h3>
          <ChevronDown></ChevronDown>
        </div>
        <DiscoverIcon></DiscoverIcon>
      </section>
      <section>
        <div className='px-3 py-4'>
          <div className='flex items-center'>
            <Avatar size='super' url={userData?.avatar}></Avatar>
            <div className='flex-1 ml-8'>
              <div className='flex items-center mb-4'>
                <h2 className='mr-4 text-2xl font-light text-graySecondary'>
                  {userData?.username}
                </h2>
                <OptionIcon></OptionIcon>
              </div>
              <div>
                {personal ? (
                  <Link to='/accounts/edit' className='inline-block w-full'>
                    <button className='w-full px-4 py-2 text-sm font-semibold rounded bg-grayBtn'>
                      Edit profile
                    </button>
                  </Link>
                ) : (
                  <div className='flex items-center justify-between gap-1'>
                    <div>
                      {follow ? (
                        <button className='flex items-center px-4 py-[6px] bg-grayBtn rounded'>
                          <span className='text-sm font-semibold text-graySecondary'>
                            Following
                          </span>
                          <div>
                            <ChevronDown></ChevronDown>
                          </div>
                        </button>
                      ) : (
                        <button className='flex items-center px-4 py-[6px] bg-bluePrimary rounded'>
                          <span className='text-sm font-semibold text-white'>Follow</span>
                        </button>
                      )}
                    </div>
                    <button className='px-4 py-[6px] flex-1 bg-grayBtn text-sm font-semibold rounded text-graySecondary'>
                      Message
                    </button>
                    <button className='px-2 py-[6px] bg-grayBtn flex items-center justify-center w-[34px] h-[32px] rounded-[4px]'>
                      <DiscoverIcon></DiscoverIcon>
                    </button>
                  </div>
                )}
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
          <div className='text-grayText'>posts</div>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='font-medium text-graySecondary'>721K</div>
          <div className='text-grayText'>followers</div>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <div className='font-medium text-graySecondary'>973</div>
          <div className='text-grayText'>following</div>
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
