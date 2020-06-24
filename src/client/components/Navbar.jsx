import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = ({ toggleMenu, handleClick }) => (
  <nav className="navbar">
    <Link className="navbar-logo" to="/" onClick={handleClick}>
      <Logo />
    </Link>
    <button type="button" className="menu-button" onClick={toggleMenu}>
      <i className="fas fa-bars" />
    </button>
  </nav>
);

Navbar.propTypes = {
  handleClick: PropTypes.func,
  toggleMenu: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  handleClick: () => {},
};

export default Navbar;
