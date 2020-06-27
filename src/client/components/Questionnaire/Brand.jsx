import React, { useState } from 'react';
import PropTypes from 'prop-types';

import OtherInput from '../UI/OtherInput';
import Selection from './Selection';

const brands = [
  { name: 'lg', svgLink: '/svg/brand-lg.svg', label: 'LG' },
  { name: 'ge', svgLink: '/svg/brand-ge.svg', label: 'GE' },
  { name: 'samsung', svgLink: '/svg/brand-samsung.svg', label: 'Samsung' },
];

const Brand = ({ answer }) => {
  const [brand, setBrand] = useState('');

  return (
    <div className="brand">
      <div className="prompt">
        <p>What brand is your appliance?</p>
      </div>
      <div className="selection-choices">
        {brands.map(({ name, svgLink, label }) => (
          <Selection
            key={name}
            handleSelect={() => {
              setBrand(name);
              answer(name);
            }}
            active={name === brand}
            name={name}
            svgLink={svgLink}
            label={label}
          />
        ))}
      </div>
      <OtherInput
        prompt="Other"
        fieldName="brand"
        onChange={setBrand}
        handleSubmit={answer}
        button
      />
    </div>
  );
};

Brand.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default Brand;
