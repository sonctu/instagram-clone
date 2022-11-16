import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '~/store/store';
import instagram from '../assets/instagram.png';

interface FormLayoutProps {
  children?: React.ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ children }) => {
  const { currentUser } = useUserStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser, navigate]);

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-screen overflow-y-auto sm:top-1/2 sm:bg-[#f1f3f4]'>
      <div className='max-w-[350px] bg-white px-8 w-full sm:border sm:border-grayPrimary rounded-lg'>
        <div className='w-[175px] my-5 relative left-1/2 -translate-x-1/2'>
          <img src={instagram} alt='instagram' className='object-cover w-full h-full text-white' />
        </div>
        <div className='text-graySecondary'>{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
