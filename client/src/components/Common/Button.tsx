import { FC } from 'react';

interface IPropsButton {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
const Button: FC<IPropsButton> = ({ children, type = 'button' }) => {
  return (
    <button
      type={type}
      className='px-4 py-2 text-sm font-semibold text-white rounded-md bg-bluePrimary'
    >
      {children}
    </button>
  );
};

export default Button;
