import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/createPost">記事投稿</Link>
      <Link to="/login">ログイン</Link>
    </nav>
  );
}

export default Navbar;
