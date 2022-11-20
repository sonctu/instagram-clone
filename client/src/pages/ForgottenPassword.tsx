import { FC, HTMLInputTypeAttribute } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '~/components/Form/Button';
import BackIcon from '~/components/Icons/BackIcon';
import FormLayout from '~/layouts/FormLayout';

type FormValues = {
  email: string;
  password: string;
};
type InputFieldProps = {
  value: string;
  name: string;
  onBlur: () => void;
  onChange: () => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};
const initialFormValues: FormValues = {
  email: '',
  password: '',
};
const ForgottenPassword: FC = () => {
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: initialFormValues,
    mode: 'onChange',
  });

  const handleResetPassword = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit(handleResetPassword)} className='flex flex-col gap-2 mb-6'>
        <Link to='/login' className='absolute cursor-pointer top-2 left-2'>
          <BackIcon></BackIcon>
        </Link>
        <Controller
          control={control}
          name='email'
          render={({ field: { name, onBlur, onChange, value } }) => (
            <Input
              type='text'
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder='Phone number, username or email address'
            ></Input>
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { name, onBlur, onChange, value } }) => (
            <Input
              type='password'
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder='Password'
            ></Input>
          )}
        />
        <Button type='reset' text='Reset' onClick={() => reset(initialFormValues)}></Button>
        <Button text='Reset Password' type='submit'></Button>
      </form>
    </FormLayout>
  );
};

const Input: FC<InputFieldProps> = ({ value, type, ...props }) => {
  return (
    <div className='relative'>
      <input
        {...props}
        value={value || ''}
        type={type}
        className='w-full p-2 text-xs border rounded text-graySecondary border-grayPrimary'
      />
    </div>
  );
};

export default ForgottenPassword;
