import React from 'react';
import Map from '../components/Map';

const ServiceMap = () => (
  <div className="service-map">
    <p className="title">
      Service Area
    </p>
    <div className="map-container">
      <Map />
    </div>
  </div>
);

export default ServiceMap;
