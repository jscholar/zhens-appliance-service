import React from 'react';
import PropTypes from 'prop-types';

const Drawer = ({ isOpen, children, closeDrawer }) => (
  <>
    <div onClick={closeDrawer} className={`background ${isOpen ? 'background-open' : ''}`} aria-hidden />
    <div className={`drawer ${isOpen ? 'drawer-open' : ''}`}>
      <div className="content">
        {children}
      </div>
    </div>
  </>
);

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default Drawer;
