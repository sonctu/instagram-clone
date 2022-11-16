import './App.css';
import { getIsLogin } from './utils/constants';
import { refreshToken } from './services/auth';
import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useUserStore } from './store/store';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';

function App() {
  const { setCurrentUser } = useUserStore((state) => state);
  const [cookies, setCookie] = useCookies(['accessToken']);
  useEffect(() => {
    const isLogin = getIsLogin();
    if (isLogin) {
      (async function refreshUser() {
        const res = await refreshToken();
        setCurrentUser(res.data.data);
        setCookie('accessToken', res.data.accessToken);
      })();
    }
  }, [setCookie, setCurrentUser]);
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={getIsLogin() && cookies.accessToken ? <Home></Home> : <Login></Login>}
        ></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
