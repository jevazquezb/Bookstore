import { NavLink } from 'react-router-dom';
import user from '../images/user.png';

function Header() {
  return (
    <header>
      <nav>
        <NavLink className="main-title" to="/">Bookstore CMS</NavLink>
        <NavLink className="menu" to="/">BOOKS</NavLink>
        <NavLink className="menu" to="categories">CATEGORIES</NavLink>
      </nav>
      <div>
        <img src={user} alt="user icon" title="Log in" />
      </div>
    </header>
  );
}

export default Header;
