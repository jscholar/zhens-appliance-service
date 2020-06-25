import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({ label, svgLink, active, onClick }) => (
  <div className={`selection ${active ? 'active' : ''}`} onClick={onClick}>
    <img className="selection-icon" alt={label} src={svgLink} />
    <p>{label}</p>
  </div>
);

Selection.propTypes = {
  label: PropTypes.string.isRequired,
  svgLink: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

Selection.defaultProps = {
  active: false,
};

export default Selection;
