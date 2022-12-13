import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Avatar from '~/components/Common/Avatar';
import Heading from '~/components/Common/Heading';
import FormGroupEdit from '~/components/EditProfile/FormGroupEdit';
import FormGroupEditTextarea from '~/components/EditProfile/FormGroupEditTextarea';
import ButtonForm from '~/components/Form/ButtonForm';
import MainLayout from '~/layouts/MainLayout';
import { updateUser } from '~/services/user';
import { useUserStore } from '~/store/store';
import { IEditUser } from '~/types/auth';

const EditProfile: FC = () => {
  const [userData, setUserData] = useState<IEditUser>({
    avatar: '',
    fullname: '',
    username: '',
    website: '',
    story: '',
    email: '',
    mobile: '',
    gender: 'male',
  });
  const [fileAvatar, setFileAvatar] = useState<string>('');
  const { currentUser, setCurrentUser } = useUserStore((state) => state);
  const updateUserMutation = useMutation({
    mutationFn: (body: { userData: IEditUser; fileAvatar: string }) => updateUser(body),
  });
  useEffect(() => {
    if (currentUser) {
      const { email, username, fullname, website, story, mobile, gender, avatar } = currentUser;
      setUserData({
        fullname,
        username,
        website,
        story,
        email,
        mobile,
        gender,
        avatar,
      });
    }
  }, [currentUser]);
  const queryClient = useQueryClient();
  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUserMutation.mutate(
      { userData, fileAvatar },
      {
        onSuccess(data) {
          setCurrentUser(data.data);
          queryClient.invalidateQueries({ queryKey: ['posts'] });
          toast.success('Update user success');
          console.log(data);
        },
      },
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    setUserData((prev) => ({ ...prev, avatar: URL.createObjectURL(file) }));
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFileAvatar(reader.result as string);
      };
    }
  };

  return (
    <MainLayout>
      <section>
        <Heading content='Edit profile'></Heading>
        <div className='px-5 mt-11 mb-14'>
          <form onSubmit={handleEditProfile}>
            <div className='flex items-center gap-4 pt-5 mb-4'>
              <Avatar size='large' url={userData.avatar}></Avatar>
              <div>
                <h3 className='text-xl leading-6'>anhson1204</h3>
                <div>
                  <label htmlFor='avatar' className='text-sm font-medium text-bluePrimary'>
                    Change profile photo
                  </label>
                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    id='avatar'
                    name='avatar'
                    className='hidden'
                    onChange={handleChangeAvatar}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <FormGroupEdit
                handleChange={handleChange}
                label='Name'
                id='fullname'
                name='fullname'
                value={userData.fullname}
              ></FormGroupEdit>
              <FormGroupEdit
                handleChange={handleChange}
                label='Username'
                id='username'
                name='username'
                value={userData.username}
              ></FormGroupEdit>
              <FormGroupEdit
                handleChange={handleChange}
                label='Website'
                id='website'
                name='website'
                value={userData.website}
              ></FormGroupEdit>
              <FormGroupEditTextarea
                handleChange={handleChange}
                label='Story'
                id='story'
                name='story'
                value={userData.story}
              ></FormGroupEditTextarea>
              <FormGroupEdit
                handleChange={handleChange}
                label='Email'
                id='email'
                name='email'
                value={userData.email}
              ></FormGroupEdit>
              <FormGroupEdit
                handleChange={handleChange}
                label='Mobile'
                id='mobile'
                name='mobile'
                value={userData.mobile}
              ></FormGroupEdit>
              <ButtonForm
                type='submit'
                isLoading={updateUserMutation.isLoading}
                text='Submit'
              ></ButtonForm>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default EditProfile;
