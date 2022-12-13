import './App.css';
import { getIsLogin, storage } from './utils/constants';
import { reload } from './services/auth';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserStore } from './store/store';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import ForgottenPassword from './pages/ForgottenPassword';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Activity from './pages/Activity';
import Inbox from './pages/Inbox';
import Comment from './pages/Comment';
import EditProfile from './pages/EditProfile';
import cookies from './utils/cookies';

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
    <div className='App'>
      <Routes>
        <Route path='/' element={getIsLogin() ? <Home></Home> : <Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgotten-password' element={<ForgottenPassword></ForgottenPassword>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/profile/:id/' element={<Profile></Profile>}></Route>
        <Route path='/profile/:id/:model' element={<Profile></Profile>}></Route>
        <Route path='/accounts/activity' element={<Activity></Activity>}></Route>
        <Route path='/accounts/edit' element={<EditProfile></EditProfile>}></Route>
        <Route path='/direct/inbox' element={<Inbox></Inbox>}></Route>
        <Route path='/p/:postId/comments' element={<Comment></Comment>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
