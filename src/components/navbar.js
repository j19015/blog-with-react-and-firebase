import { Link } from 'react-router-dom';
import './navbar.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createPost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {isAuth ? (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
