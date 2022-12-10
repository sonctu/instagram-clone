import { FC } from 'react';
import Spinner from '../Common/Spinner';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const ButtonForm: FC<ButtonProps> = ({ type = 'button', text, isLoading, ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className='flex items-center justify-center w-full h-8 px-2 py-1 text-sm font-semibold text-white rounded select-none bg-bluePrimary'
    >
      {isLoading ? <Spinner></Spinner> : text}
    </button>
  );
};

export default ButtonForm;
