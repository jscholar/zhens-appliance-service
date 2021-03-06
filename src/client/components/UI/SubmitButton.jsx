import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const SubmitButton = ({
  label,
  done,
  onClick,
  loading,
  className,
}) => (
  <div className={`
    submit-button
    ${loading ? 'loading' : ''}
    ${done ? 'done' : ''}
  `}
  >
    <button
      className={className}
      type="submit"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCircleNotch} />
      <FontAwesomeIcon icon={faCheck} />
      <span>{label}</span>
    </button>
  </div>
);

SubmitButton.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: 'tertiary-button',
  label: 'Submit',
  onClick: () => {},
};

export default SubmitButton;
