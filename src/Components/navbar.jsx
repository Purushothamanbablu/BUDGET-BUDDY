import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const getLinkClassName = (path) => {
    let className = '';
    if (!isAuthenticated) {
      className += 'disabled';
    }
    if (location.pathname === path) {
      className += (className ? ' ' : '') + 'active-nav-link';
    }
    if (path === '/' && location.pathname === '/') {
         className += (className ? ' ' : '') + 'active-nav-link';
    }
   

    return className;
  };


  return (
    <div className="navDiv">
      <ul className="list-unstyled navs m-0">
        <li>
          <Link to="/" className={getLinkClassName('/')}>
          <i className="fa-solid fa-house"></i>
          </Link>
        </li>
        <li>
          <Link to="/history" className={getLinkClassName('/history')}>
          <i className="fa-solid fa-clock-rotate-left"></i>
          </Link>
        </li>
        <li>
          <Link to="/add" className={getLinkClassName('/add')}>
          <i className="fa-solid fa-plus add"></i>
          </Link>
        </li>
        <li>
          <Link to="/tasks" className={getLinkClassName('/tasks')}>
          <i className="fa-solid fa-list-check"></i>
          </Link>
        </li>
        <li>
          <Link to="/profile" className={getLinkClassName('/profile')}>
          <i className="fa-solid fa-user"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar
