import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <br />
        <NavLink to="categories">Categories</NavLink>
      </nav>
    </header>
  );
}

export default Header;
