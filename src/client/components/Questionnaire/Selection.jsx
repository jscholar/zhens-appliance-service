import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({
  label,
  svgLink,
  active,
  handleSelect,
}) => (
  <div
    role="grid cell"
    tabIndex="0"
    className={`selection ${active ? 'active' : ''}`}
    onKeyPress={({ key }) => {
      if (key === 'Enter') handleSelect();
    }}
    onClick={handleSelect}
  >
    <img className="selection-icon" alt={label} src={svgLink} />
    {
      label ? <p>{label}</p> : null
    }
  </div>
);

Selection.propTypes = {
  handleSelect: PropTypes.func,
  label: PropTypes.string,
  svgLink: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

Selection.defaultProps = {
  handleSelect: () => {},
  active: false,
  label: '',
};

export default Selection;
