import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';

function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      // ログアウト
      localStorage.removeItem('isAuth');
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button type="button" onClick={logout}>
        ログアウト
      </button>
    </div>
  );
}

export default Logout;
