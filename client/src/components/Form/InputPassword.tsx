import { FC, useState } from 'react';
import { Control, FieldError } from 'react-hook-form';
import IconEyeToggle from '../Icons/IconEyeToggle';
import Input from './Input';

interface InputPasswordProps {
  control: Control<any>;
  error?: FieldError;
}

const InputPassword: FC<InputPasswordProps> = ({ control }) => {
  const [togglePass, setTogglePass] = useState<boolean>(false);

  const handleTogglePass = () => {
    setTogglePass(!togglePass);
  };

  return (
    <Input
      control={control}
      name='password'
      type={togglePass ? 'text' : 'password'}
      placeholder='Password'
    >
      <div
        onClick={handleTogglePass}
        className='absolute -translate-y-1/2 cursor-pointer right-2 top-1/2'
        aria-hidden
      >
        <IconEyeToggle togglePass={togglePass}></IconEyeToggle>
      </div>
    </Input>
  );
};

export default InputPassword;
