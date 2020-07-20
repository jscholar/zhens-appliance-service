import React from 'react';
import YelpIcon from '../components/YelpIcon';

const About = () => (
  <div className="about">
    <p className="title">
      About Zhen
    </p>
    <div className="frame">
      <img src="/img/zhen.jpg" alt="Zhen and his work vehicle" />
      <p className="caption">
        Zhen is an appliance repair technician with over 20 years of professional experience.
      </p>
    </div>
    <div className="yelp">
      <p>Check us out on Yelp!</p>
      <YelpIcon />
    </div>
  </div>
);

export default About;
