import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StatusBar from './StatusBar';

const fields = [
  'appliance',
  'brand',
  'message',
  'zip',
];

const Questionnaire = ({ toggle, active }) => {
  const [progress, setProgress] = useState([null, null, null, null]);
  const [current, setCurrent] = useState(0);

  return (
    <div className="questionnaire">
      <div className="caret-container">
        <button type="button" onClick={toggle}>
          <i className="fas fa-caret-up questionnaire-caret" />
        </button>
      </div>
      <div className="status-container">
        <StatusBar progress={progress} current={current} active={active} />
      </div>
      <div className="questionnaire-field">
        
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
