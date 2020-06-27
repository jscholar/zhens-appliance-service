import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo';

const Navbar = ({
  isOpen,
  toggleMenu,
  handleClick,
  displayContact,
}) => (
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
        <FontAwesomeIcon fixedWidth icon={isOpen ? faTimes : faBars} />
      </button>
    </div>
  </nav>
);

Navbar.propTypes = {
  handleClick: PropTypes.func,
  toggleMenu: PropTypes.func.isRequired,
  displayContact: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  handleClick: () => {},
  displayContact: true,
};

export default Navbar;
