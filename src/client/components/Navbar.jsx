import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = ({ toggleMenu, handleClick, displayContact }) => (
  <nav className="navbar">
    <Link className="navbar-logo" to="/" onClick={handleClick}>
      <Logo />
    </Link>
    <div className="navbar-right">

      {
        displayContact
          ? (
            <div>
              <Link onClick={handleClick} to="contact" className="primary-button primary-button-sm">
                Contact
              </Link>
            </div>
          ) : null
      }
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <i className="fas fa-bars" />
      </button>
    </div>
  </nav>
);

Navbar.propTypes = {
  handleClick: PropTypes.func,
  toggleMenu: PropTypes.func.isRequired,
  displayContact: PropTypes.bool,
};

Navbar.defaultProps = {
  handleClick: () => {},
  displayContact: true,
};

export default Navbar;
