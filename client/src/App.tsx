import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import { useEffect } from 'react';
import { refreshToken } from './services/auth';
import { useUserStore } from './store/store';

function App() {
  const { setCurrentUser } = useUserStore((state) => state);
  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem('login') as string);
    if (isLogin) {
      (async function refreshUser() {
        const res = await refreshToken();
        setCurrentUser(res.data.data);
      })();
    }
  }, [setCurrentUser]);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
