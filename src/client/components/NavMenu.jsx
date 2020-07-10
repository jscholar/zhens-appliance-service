import React from 'react';
import PropTypes from 'prop-types';

import NavItem from './NavItem';

const NavMenu = ({ handleClick }) => (
  <div className="navmenu">
    <ul>
      {
        [
          { path: '/about', label: 'About' },
          { path: '/contact', label: 'Contact Info' },
          { path: '/service-map', label: 'Service Map' },
        ]
          .map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} handleClick={handleClick} />
          ))
      }
    </ul>
  </div>
);

NavMenu.propTypes = {
  handleClick: PropTypes.func,
};

NavMenu.defaultProps = {
  handleClick: () => {},
};

export default NavMenu;
