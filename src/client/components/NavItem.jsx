import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ path, label, handleClick }) => (
  <li className="navitem">
    <Link className="navlink" to={path} onClick={handleClick}>
      {label}
    </Link>
  </li>
);

NavItem.propTypes = {
  handleClick: PropTypes.func,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  handleClick: () => {},
};

export default NavItem;
