import { FC } from 'react';
import { FormStateLogin } from '~/types/auth';
import { Link } from 'react-router-dom';
import { loginUser } from '~/services/auth';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '~/store/store';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '~/components/Form/Button';
import ButtonFacebook from '~/components/Form/ButtonFacebook';
import ButtonGoogle from '~/components/Form/ButtonGoogle';
import Divider from '~/components/Form/Divider';
import FormLayout from '~/layouts/FormLayout';
import Input from '~/components/Form/Input';
import InputPassword from '~/components/Form/InputPassword';
import { getIsLogin } from '~/utils/constants';

const initialFormState: FormStateLogin = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required'),
});

const Login: FC = () => {
  const { setCurrentUser } = useUserStore((state) => state);

  const { handleSubmit, control } = useForm<FormStateLogin>({
    defaultValues: initialFormState,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const loginUserMutation = useMutation({
    mutationFn: (body: FormStateLogin) => loginUser(body),
  });

  const handleLogin = (values: FormStateLogin) => {
    const isLogin = getIsLogin();
    if (isLogin) return;

    loginUserMutation.mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem('login', JSON.stringify(true));
        setCurrentUser(data.data.data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <FormLayout>
      <form className='flex flex-col items-center' onSubmit={handleSubmit(handleLogin)}>
        <div className='flex flex-col w-full gap-2 mt-5'>
          <Input
            control={control}
            name='email'
            placeholder='Phone number, username or email address'
          ></Input>
          <InputPassword control={control}></InputPassword>
          <button className='mb-4 text-xs font-medium text-right cursor-pointer select-none'>
            Forgotten password?
          </button>
        </div>
        <Button type='submit' text='Log in' isLoading={loginUserMutation.isLoading}></Button>
        <Divider></Divider>
        <div className='w-full mt-1'>
          <ButtonGoogle></ButtonGoogle>
          <ButtonFacebook></ButtonFacebook>
        </div>
        <div className='absolute bottom-0 w-full py-3 text-sm text-center transition-all border-t sm:pt-5 sm:pb-2 sm:relative sm:border-transparent border-grayPrimary'>
          Do not have an account?{' '}
          <Link to='/register' className='font-semibold cursor-pointer'>
            Sign Up
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default Login;
