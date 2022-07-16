import { NavLink } from 'react-router-dom';
import user from '../images/user.png';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <NavLink to="/">BOOKS</NavLink>
        <br />
        <NavLink to="categories">CATEGORIES</NavLink>
      </nav>
      <div>
        <img src={user} alt="user icon" title="Log in" />
      </div>
    </header>
  );
}

export default Header;
