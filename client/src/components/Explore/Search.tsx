import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getSearchUser } from '~/services/user';
import SearchIcon from '../Icons/SearchIcon';
import XCircleIcon from '../Icons/XCircleIcon';
import LoadIcon from '../../assets/loading.gif';

const Search: FC = () => {
  const [searchUser, setSearchUser] = useState('');

  const [cookies, _] = useCookies(['accessToken']);

  const { data, isLoading } = useQuery({
    queryKey: ['searchUser', searchUser],
    queryFn: () => getSearchUser(searchUser, cookies.accessToken),
    enabled: !!cookies.accessToken && !!searchUser,
  });

  const handleCloseSearch = () => {
    setSearchUser('');
  };
  console.log(data?.data.data);
  return (
    <section
      className={`fixed top-0 left-0 z-50 w-full px-4 py-2 border-b border-grayPrimary ${
        searchUser ? 'bg-bgColorPrimary' : 'bg-white'
      }`}
    >
      <div className='relative border-2 rounded-md border-grayPrimary'>
        <input
          type='text'
          className='w-full px-1 py-2 text-sm appearance-none h-[30px] rounded-md'
          onChange={(e) => setSearchUser(e.target.value)}
          value={searchUser || ''}
        />
        <div
          className={`absolute flex items-center gap-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 transition-all duration-100 ${
            searchUser ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className='w-3 h-3 -translate-y-[5px]'>
            <SearchIcon></SearchIcon>
          </span>
          <span className='text-sm text-grayText'>Tìm kiếm</span>
        </div>
        <div
          className={`absolute flex items-center justify-center -translate-y-1/2 cursor-pointer right-1 top-1/2 transition-all duration-100 ${
            !searchUser ? 'opacity-0 invisible' : 'opacity-100 visible'
          }`}
          aria-hidden
          onClick={handleCloseSearch}
        >
          {isLoading ? (
            <img src={LoadIcon} alt='load-icon' className='w-4 h-4' />
          ) : (
            <XCircleIcon></XCircleIcon>
          )}
        </div>
      </div>
      {searchUser && data?.data.data.length !== undefined && data.data.data.length > 0 && (
        <div className='absolute left-0 z-10 w-full border-t border-grayPrimary max-h-[320px] overflow-y-auto bg-white top-full'>
          <ul className='py-2'>
            {data?.data.data.map((item) => (
              <li
                key={item._id}
                className='flex items-center gap-3 px-4 py-2 transition-all cursor-pointer hover:bg-bgColorPrimary'
              >
                <div className='w-11 h-11'>
                  <img
                    src={
                      item.avatar ||
                      'https://vaithuhayho.com/wp-content/uploads/2022/09/anh-gai-xinh-deo-kinh-35.jpg'
                    }
                    alt='explore-img'
                    className='object-cover w-full h-full rounded-full'
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <h3 className='text-sm font-semibold text-graySecondary'>{item.username}</h3>
                  <span className='text-sm text-grayText'>{item.fullname}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Search;
