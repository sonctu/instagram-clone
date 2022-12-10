import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { getAllPosts } from '~/services/post';
import PostItem from './PostItem';

const PostList: FC = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  });

  return (
    <section>
      {data?.data.map((item) => (
        <PostItem {...item} key={item._id}></PostItem>
      ))}
    </section>
  );
};

export default PostList;
