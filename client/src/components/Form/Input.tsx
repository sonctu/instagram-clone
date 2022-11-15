import { FC, HTMLInputTypeAttribute } from 'react';
import { Control, useController } from 'react-hook-form';

interface InputProps {
  control: Control<any>;
  name: 'email' | 'password' | 'fullname' | 'username';
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  children?: React.ReactNode;
}
const Input: FC<InputProps> = ({ control, name, children, ...props }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <div className='relative'>
      <input
        className='w-full p-2 text-xs border rounded text-graySecondary border-grayPrimary'
        {...props}
        {...field}
      />
      {children}
    </div>
  );
};

export default Input;
