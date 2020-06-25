import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StatusBar from './StatusBar';
import Appliances from './Appliances';

const fields = [
  'appliance',
  'brand',
  'message',
  'zip',
];

const Questionnaire = ({ toggle, active }) => {
  const [progress, setProgress] = useState(new Array(fields.length).fill(null));
  const [current, setCurrent] = useState(0);

  return (
    <div className="questionnaire">
      <div className="questionnaire-top">
        <div className="caret-container">
          <button type="button" onClick={toggle}>
            <i className="fas fa-caret-up questionnaire-caret" />
          </button>
        </div>
        <div className="status-container">
          <StatusBar progress={progress} current={current} active={active} />
        </div>
      </div>
      <div
        className="form"
        style={{
          transform: `translateX(-${100 * current}vw)`,
        }}
      >
        {
          [Appliances].map((component, i) => (
            <section key={fields[i]} className="field">
              {React.createElement(component, {
                answer: (input) => {
                  const newProgress = [...progress];
                  newProgress[i] = input;
                  setProgress(newProgress);
                  setCurrent(i + 1);
                },
              })}
            </section>
          ))
        }
        <section className="field">Brand</section>
        <section className="field">Zip Code</section>
        <section className="field">Contact Info</section>
      </div>
    </div>
  );
};

Questionnaire.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
};

Questionnaire.defaultProps = {
  toggle: () => console.log('toggle questionnaire'),
};

export default Questionnaire;
