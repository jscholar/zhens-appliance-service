import React from 'react';

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
      <a href="#contact-info" className="contact-button">
        Contact Zhen
      </a>
    </div>
  </div>
);

export default Landing;
