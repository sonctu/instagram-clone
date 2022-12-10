import { FC, useState } from 'react';
import Avatar from '~/components/Common/Avatar';
import Button from '~/components/Common/Button';
import Heading from '~/components/Common/Heading';
import FormGroupEdit from '~/components/EditProfile/FormGroupEdit';
import FormGroupEditTextarea from '~/components/EditProfile/FormGroupEditTextarea';
import MainLayout from '~/layouts/MainLayout';

const EditProfile: FC = () => {
  const [userData, setUserData] = useState({
    fullname: '',
    username: '',
    website: '',
    story: '',
    email: '',
    mobile: '',
    gender: 'male',
  });
  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    console.log(e.target.value);
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <MainLayout>
      <section>
        <Heading content='Edit profile'></Heading>
        <div className='px-5 mt-11 mb-14'>
          <form onSubmit={handleEditProfile}>
            <div className='flex items-center gap-4 pt-5 mb-4'>
              <Avatar size='large'></Avatar>
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
                    onChange={handleChange}
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
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default EditProfile;
