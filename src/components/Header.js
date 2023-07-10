import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
          <NavLink to="/Cart" activeClassName="active">
            Cart
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Product" activeClassName="active">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
