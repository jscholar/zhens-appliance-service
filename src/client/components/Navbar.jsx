import React from 'react';

import Logo from './Logo';

const Navbar = () => (
  <nav className="navbar">
    <a className="navbar-logo" href="/">
      <Logo />
    </a>
    <div className="menu-button">
      <icon className="fas fa-bars" />
    </div>
  </nav>
);

export default Navbar;
