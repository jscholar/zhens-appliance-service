import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

const Landing = () => (
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
      <Link to="contact" className="primary-button">
        Contact Zhen
      </Link>
    </div>
  </div>
);

export default Landing;
