import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

const Landing = () => (
  <div className="landing">
    <div className="banner">
      <div className="banner-title">
        <Logo />
      </div>
      <p className="banner-based">
        <em>Based in Seattle, WA</em>
      </p>
      <p className="banner-motto">
        &quot;Trust your repairs to a real, experienced technician&quot;
      </p>
      <Link to="contact" className="primary-button">
        Contact Zhen
      </Link>
    </div>
  </div>
);

export default Landing;
