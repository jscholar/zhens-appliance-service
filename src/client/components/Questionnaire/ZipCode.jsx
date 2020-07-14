import React from 'react';
import PropTypes from 'prop-types';

import OtherInput from '../UI/OtherInput';
import Map from '../Map';

const ZipCode = ({ answer }) => (
  <div className="zip">
    <div className="prompt">
      <p>What is your zip code?</p>
    </div>
    <div className="zip-input">
      <OtherInput
        type="number"
        fieldName="zip"
        handleSubmit={answer}
      />
    </div>
    <div className="map-container">
      <Map />
    </div>
  </div>
);

ZipCode.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default ZipCode;
