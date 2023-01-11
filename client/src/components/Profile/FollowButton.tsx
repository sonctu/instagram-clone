import { useMutation } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { followUser, unfollowUser } from '~/services/user';
import { useUserStore } from '~/store/store';
import { IUser } from '~/types/auth';
import ChevronDown from '../Icons/ChevronDown';

interface IPropsFollowButton {
  userData: IUser;
}

const FollowButton: FC<IPropsFollowButton> = ({ userData }) => {
  const { _id } = userData;

  const { currentUser, setCurrentUser } = useUserStore((state) => state);

  const [follow, setFollow] = useState(() => currentUser?.followings.includes(_id));

  const followUserMutation = useMutation({
    mutationFn: (body: string) => followUser(body),
  });

  const unfollowUserMutation = useMutation({
    mutationFn: (body: string) => unfollowUser(body),
  });

  useEffect(() => {
    if (currentUser?.followings.includes(_id)) {
      setFollow(true);
    }
  }, [_id, currentUser]);

  const handleFollow = () => {
    setFollow(true);
    followUserMutation.mutate(_id, {
      onSuccess() {
        const newCurrentUser = currentUser as IUser;
        setCurrentUser({ ...newCurrentUser, followings: [...newCurrentUser.followings, _id] });
        console.log('follow success');
      },
    });
  };
  const handleUnFollow = () => {
    setFollow(false);
    unfollowUserMutation.mutate(_id, {
      onSuccess() {
        const newCurrentUser = currentUser as IUser;
        setCurrentUser({
          ...newCurrentUser,
          followings: newCurrentUser.followings.filter((e) => e !== _id),
        });
        console.log('unfollow success');
      },
    });
  };

  return (
    <div>
      {follow ? (
        <button
          onClick={handleUnFollow}
          className='flex items-center px-4 py-[6px] bg-grayBtn rounded'
        >
          <span className='text-sm font-semibold text-graySecondary'>Following</span>
          <div>
            <ChevronDown></ChevronDown>
          </div>
        </button>
      ) : (
        <button
          onClick={handleFollow}
          className='flex items-center px-4 py-[6px] bg-bluePrimary rounded'
        >
          <span className='text-sm font-semibold text-white'>Follow</span>
        </button>
      )}
    </div>
  );
};

export default FollowButton;
