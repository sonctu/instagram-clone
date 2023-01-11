import './App.css';
import { getIsLogin, storage } from './utils/constants';
import { reload } from './services/auth';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useUserStore } from './store/store';

import cookies from './utils/cookies';
import ModalManage from './components/Modal/ModalManage';
import Spinner from './components/Common/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Register = lazy(() => import('./pages/Register'));
const ForgottenPassword = lazy(() => import('./pages/ForgottenPassword'));
const Explore = lazy(() => import('./pages/Explore'));
const Profile = lazy(() => import('./pages/Profile'));
const Activity = lazy(() => import('./pages/Activity'));
const Inbox = lazy(() => import('./pages/Inbox'));
const Comment = lazy(() => import('./pages/Comment'));
const EditProfile = lazy(() => import('./pages/EditProfile'));

function App() {
  const { setCurrentUser } = useUserStore((state) => state);
  useEffect(() => {
    const isLogin = getIsLogin();
    if (isLogin) {
      (async function refreshUser() {
        const res = await reload();
        setCurrentUser(res.data);
        cookies.set('accessToken', res.accessToken);
        storage.set('accessToken', res.accessToken);
      })();
    }
  }, [setCurrentUser]);
  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <div className='App'>
        <Routes>
          <Route path='/' element={getIsLogin() ? <Home></Home> : <Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route
            path='/forgotten-password'
            element={<ForgottenPassword></ForgottenPassword>}
          ></Route>
          <Route path='/explore' element={<Explore></Explore>}></Route>
          <Route path='/profile/:id/' element={<Profile></Profile>}></Route>
          <Route path='/profile/:id/:model' element={<Profile></Profile>}></Route>
          <Route path='/accounts/activity' element={<Activity></Activity>}></Route>
          <Route path='/accounts/edit' element={<EditProfile></EditProfile>}></Route>
          <Route path='/direct/inbox' element={<Inbox></Inbox>}></Route>
          <Route path='/p/:postId/comments' element={<Comment></Comment>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <ModalManage></ModalManage>
      </div>
    </Suspense>
  );
}

export default App;
