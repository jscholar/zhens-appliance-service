import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../components/Logo';

const Landing = ({ getStarted }) => (
  <div className="landing">
    <div className="banner">
      <div className="banner-title">
        <div className="banner-logo">
          <Logo />
        </div>
        <p className="banner-based">
          <em>Based in Seattle, WA</em>
        </p>
      </div>
      <div className="banner-motto">
        <p>
          &quot;Trust your repairs to a real, experienced technician.&quot;
        </p>
      </div>
      <button type="button" className="tertiary-button banner-button" onClick={getStarted}>
        Get an estimate
      </button>
    </div>
  </div>
);

Landing.propTypes = {
  getStarted: PropTypes.func.isRequired,
};

export default Landing;
