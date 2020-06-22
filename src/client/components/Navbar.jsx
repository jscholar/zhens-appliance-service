import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = () => (
  <nav className="navbar">
    <Link className="navbar-logo" to="/">
      <Logo />
    </Link>
    <div className="menu-button">
      <i className="fas fa-bars" />
    </div>
  </nav>
);

export default Navbar;
