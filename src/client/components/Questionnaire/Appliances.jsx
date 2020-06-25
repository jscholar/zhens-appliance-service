import React from 'react';
import Appliance from './Appliance';

const appliances = [
  { name: 'refrigerator', svgLink: '/svg/001-fridge.svg', label: 'Refrigerator' },
  { name: 'dish-washer', svgLink: '/svg/002-dishwasher.svg', label: 'Dish Washer' },
  { name: 'range', svgLink: '/svg/004-gas-stove.svg', label: 'Range' },
  { name: 'washer', svgLink: '/svg/003-washer.svg', label: 'Washer' },
  { name: 'dryer', svgLink: '/svg/007-dryer-2.svg', label: 'Dryer' },
  { name: 'air-conditioner', svgLink: '/svg/air-conditioner.svg', label: 'AC Unit' },

];

const Appliances = ({ answer }) => (
  <div className="appliances">
    <div className="question">
      <p>What needs fixing?</p>
    </div>
    <div className="appliance-choices">
      {
        appliances.map(({ name, svgLink, label }) => (
          <div className="appliance" key={name} onClick={() => console.log(name)}>
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
        <input type="text" name="appliance" />
      </label>
    </div>
  </div>
);

export default Appliances;
