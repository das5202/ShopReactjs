import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      history.push('/search');
    } else {
      history.goBack();
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item search-bar">
          {location.pathname !== '/search' && (
            <button onClick={toggleSearch}>Search</button>
          )}
        </li>
        <li className="nav-item">
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
