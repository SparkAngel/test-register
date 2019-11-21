import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <Link
        to="/"
        className="header-nav_a"
      >
        Home
      </Link>
      <Link
        to="/clients"
        className="header-nav_a"
      >
        Сlients
      </Link>
      <Link
        to="/register"
        className="header-nav_a"
      >
        Register
      </Link>
      <Link
        to="/about"
        className="header-nav_a"
      >
        About
      </Link>
    </nav>
  </header>
);

export default Header;
