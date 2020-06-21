import React, { useState } from 'react';

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
        
      </div>
    </div>
  );
};

export default Questionnaire;
