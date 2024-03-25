import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase.js';

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      // Googleでログイン成功
      console.log(result);
      // ログイン状態をlocalStorageに保存
      localStorage.setItem('isAuth', true);
      // ログイン状態を更新
      setIsAuth(true);
      // ログイン後に遷移する
      navigate('/');
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button type="button" onClick={loginWithGoogle}>
        Googleでログイン
      </button>
    </div>
  );
}

export default Login;
