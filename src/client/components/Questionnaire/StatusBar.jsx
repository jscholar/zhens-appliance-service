/* eslint-disable react/no-array-index-key */
/* I... I don't know what else to use... */

import React from 'react';
import PropTypes from 'prop-types';

const StatusBar = ({ progress, current, active }) => (
  <div className="status-bar">
    <div className="status-line" />
    {progress.map((field, index) => (
      <div
        key={index}
        className={
          `status-circle
          ${field !== null ? 'status-circle-done' : ''}
          ${active && current === index ? 'status-circle-current' : ''}
          `
        }
      />
    ))}
  </div>
);

StatusBar.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.bool).isRequired,
  active: PropTypes.bool,
  current: PropTypes.number,
};

StatusBar.defaultProps = {
  active: true,
  current: -1,
};

export default StatusBar;
