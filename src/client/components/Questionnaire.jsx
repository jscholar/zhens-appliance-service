import React, { useState } from 'react';

import StatusBar from './StatusBar';

const fields = [
  'appliance',
  'brand',
  'message',
  'zip',
];

const Questionnaire = (props) => {
  const [progress, setProgress] = useState([null, null, null, null]);
  const [current, setCurrent] = useState(0);
  return (
    <div className="questionnaire">
      <div className="caret-container">
        <i className="fas fa-caret-up questionnaire-caret" />
      </div>
      <div className="status-container">
        <StatusBar progress={progress} current={current} />
      </div>
    </div>
  );
};

export default Questionnaire;
