import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Appliance from './Appliance';

const appliances = [
  { name: 'refrigerator', svgLink: '/svg/001-fridge.svg', label: 'Refrigerator' },
  { name: 'dish-washer', svgLink: '/svg/002-dishwasher.svg', label: 'Dish Washer' },
  { name: 'range', svgLink: '/svg/004-gas-stove.svg', label: 'Range' },
  { name: 'washer', svgLink: '/svg/003-washer.svg', label: 'Washer' },
  { name: 'dryer', svgLink: '/svg/007-dryer-2.svg', label: 'Dryer' },
  { name: 'air-conditioner', svgLink: '/svg/air-conditioner.svg', label: 'AC Unit' },

];

const Appliances = ({ answer }) => {
  const [appliance, setAppliance] = useState('');

  return (
    <div className="appliances">
      <div className="prompt">
        <p>What needs fixing?</p>
      </div>
      <div className="appliance-choices">
        {
          appliances.map(({ name, svgLink, label }, i) => (
            <div
              role="button"
              tabIndex={i}
              className={`appliance ${appliance === name ? 'selected' : ''}`}
              key={name}
              onKeyPress={({ key }) => {
                if (key === 'Enter') {
                  setAppliance(name);
                  answer(name);
                }
              }}
              onClick={() => {
                setAppliance(name);
                answer(name);
              }}
            >
              <Appliance
                name={name}
                svgLink={svgLink}
                label={label}
              />
            </div>
          ))
        }
      </div>
      <div className="appliance-input">
        <label htmlFor="appliance">
          Other
          <input
            tabIndex={appliances.length + 1}
            type="text"
            name="appliance"
            onChange={(e) => setAppliance(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // Unfocuses input on mobile browsers
                e.target.blur();
                answer(appliance);
              }
            }}
          />
        </label>
        <button
          type="button"
          disabled={appliance.length === 0}
          className="tertiary-button"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

Appliances.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default Appliances;
