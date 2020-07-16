import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Drawer from './UI/Drawer';
import NavMenu from './NavMenu';
import Logo from './Logo';

const Navbar = ({
  handleClick,
  displayContact,
  setActive,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="navbar-logo" to="/" onClick={handleClick}>
          <Logo />
        </Link>
        <div className="navbar-right">
          {
            displayContact
              ? (
                <div id="navbar-contact-button">
                  <Link onClick={handleClick} to="contact" className="primary-button primary-button-sm">
                    Contact
                  </Link>
                </div>
              ) : null
          }
          <button type="button" className="menu-button" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon fixedWidth icon={open ? faTimes : faBars} />
          </button>
          <Drawer isOpen={open} closeDrawer={() => setOpen(false)}>
            <NavMenu handleClick={() => {
              setOpen(false);
              setActive(false);
            }}
            />
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  handleClick: PropTypes.func,
  displayContact: PropTypes.bool,
  setActive: PropTypes.func,
};

Navbar.defaultProps = {
  handleClick: () => {},
  setActive: () => {},
  displayContact: true,
};

export default Navbar;
