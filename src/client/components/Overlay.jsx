import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ isOpen, children, closeOverlay }) => (
  <div
    className={`overlay ${isOpen ? '' : 'overlay-closed'}`}
  >
    <div
      className="background"
      onClick={closeOverlay}
      onKeyPress={closeOverlay}
      aria-hidden
    />
    <div className="content">
      <div>
        <button type="button" onClick={closeOverlay} className="close-btn">
          <i className="fas fa-window-close close-icon" />
        </button>
      </div>
      {children}
    </div>
  </div>
);

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  closeOverlay: PropTypes.func.isRequired,
};

export default Overlay;
