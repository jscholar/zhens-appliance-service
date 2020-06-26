import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const ZipCode = ({ answer }) => (
  <div className="zip">
    <div className="prompt">
      <p>What is your zip code?</p>
    </div>
    <div className="zip-input">
      <Input
        type="number"
        fieldName="zip"
        handleSubmit={answer}
      />
    </div>
  </div>
);

ZipCode.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default ZipCode;
