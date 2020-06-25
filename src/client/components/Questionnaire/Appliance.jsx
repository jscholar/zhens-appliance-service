import React from 'react';

const Appliance = ({ name, label, svgLink }) => (
  <div>
    <img className="appliance-icon" alt={label} src={svgLink} />
    <p>{label}</p>
  </div>
);

export default Appliance;
