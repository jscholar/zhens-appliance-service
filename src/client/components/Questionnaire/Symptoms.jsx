import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Symptoms = ({ answer }) => {
  const [symptoms, setSymptoms] = useState('');
  return (
    <div className="symptoms">
      <div className="prompt" onChange={({ target }) => setSymptoms(target)}>
        Please briefly describe the symptoms
      </div>
      <textarea onChange={({ target }) => setSymptoms(target.value)} rows="10" cols="50" />
      <div>
        <button className="secondary-button skip" type="button" onClick={() => answer('')}>Skip</button>
        <button className="tertiary-button" type="button" onClick={() => answer(symptoms)}>Continue</button>
      </div>
    </div>
  );
};

Symptoms.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default Symptoms;
