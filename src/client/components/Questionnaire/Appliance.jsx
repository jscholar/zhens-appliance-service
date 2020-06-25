import React from 'react';
import PropTypes from 'prop-types';

const Appliance = ({ label, svgLink }) => (
  <div>
    <img className="appliance-icon" alt={label} src={svgLink} />
    <p>{label}</p>
  </div>
);

Appliance.propTypes = {
  label: PropTypes.string.isRequired,
  svgLink: PropTypes.string.isRequired,
};

export default Appliance;
