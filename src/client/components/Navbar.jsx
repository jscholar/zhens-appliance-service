import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = ({ toggleMenu }) => (
  <nav className="navbar">
    <Link className="navbar-logo" to="/">
      <Logo />
    </Link>
    <button type="button" className="menu-button" onClick={toggleMenu}>
      <i className="fas fa-bars" />
    </button>
  </nav>
);

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;
