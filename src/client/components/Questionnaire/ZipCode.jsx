import React, { useState } from 'react';
import PropTypes from 'prop-types';

import OtherInput from '../UI/OtherInput';
import Map from '../Map';

import ZIP_CODES from '../../constants/ZIP_CODES';

const ZipCode = ({ answer }) => {
  const [outside, setOutside] = useState(false);
  return (
    <div className="zip">
      <div className="prompt">
        <p>Please enter your zip code</p>
      </div>
      <div className={`zip-input ${outside ? 'outside' : ''}`}>
        <OtherInput
          type="number"
          fieldName="zip"
          handleSubmit={(input) => {
            if (ZIP_CODES.includes(input)) {
              setOutside(false);
              answer(input);
            } else {
              setOutside(true);
              answer(null);
            }
          }}
        />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

ZipCode.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default ZipCode;
