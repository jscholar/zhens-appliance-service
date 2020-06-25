import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ prompt, fieldName, handleSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <div className="other-input">
      <label htmlFor={fieldName}>
        {prompt}
        <input
          type="text"
          name={fieldName}
          onChange={({ target }) => setValue(target.value)}
          onKeyPress={({ key, target }) => {
            if (key === 'Enter') {
              // Unfocuses input on mobile browsers
              target.blur();
              handleSubmit(value);
            }
          }}
        />
      </label>
      <button
        type="button"
        disabled={value.length === 0}
        className="tertiary-button"
        onClick={() => {
          handleSubmit(value);
        }}
      >
        Continue
      </button>
    </div>
  );
};

Input.propTypes = {
  prompt: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Input;
