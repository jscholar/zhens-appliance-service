import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OtherInput = ({
  prompt,
  fieldName,
  handleSubmit,
  onChange,
  type,
}) => {
  const [value, setValue] = useState('');

  return (
    <div className="other-input">
      <label htmlFor={fieldName}>
        {prompt}
        <input
          type="text"
          pattern={type === 'number' ? '[0-9]*' : '.*'}
          name={fieldName}
          onChange={({ target }) => {
            setValue(target.value);
            onChange(target.value);
          }}
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

OtherInput.propTypes = {
  type: PropTypes.string,
  prompt: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

OtherInput.defaultProps = {
  prompt: '',
  type: 'text',
  onChange: () => {},
};

export default OtherInput;
