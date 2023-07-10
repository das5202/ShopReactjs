import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';
import Search from './Search';

const Header = () => {
  const handleSearchResults = (results) => {
    console.log(results); // Handle the search results here
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
          <Search handleSearchResults={handleSearchResults} />
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
