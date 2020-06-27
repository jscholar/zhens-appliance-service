import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-phone-number-input/input';

import SubmitButton from '../UI/SubmitButton';

const ContactInfo = ({
  answer,
  missingFields,
  done,
  loading,
}) => {
  const [info, setInfo] = useState({});

  let message = '';

  if (missingFields) message = 'Please fill in the missing fields';
  if (loading) message = '';
  if (done) message = 'Thank you. Please allow up to 24 hours for us to respond';

  return (
    <div className="contact">
      <div className="prompt">
        <p>
          Where can we contact you?
        </p>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        answer(info);
      }}
      >
        {
          [
            { name: 'firstName', placeholder: 'First Name', type: 'text' },
            { name: 'lastName', placeholder: 'Last Name', type: 'text' },
            { name: 'email', placeholder: 'Email', type: 'email' },
          ].map(({ name, placeholder, type }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              required
              onChange={({ target }) => {
                setInfo({ ...info, [name]: target.value });
              }}
            />
          ))
        }
        <Input defaultCountry="US" placeholder="Phone" required onChange={(value) => setInfo({ ...info, phone: value })} />
        <SubmitButton
          done={done}
          loading={loading}
          label="Request Estimate"
        />
      </form>
      <div>
        {message}
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  answer: PropTypes.func.isRequired,
  missingFields: PropTypes.bool,
  done: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

ContactInfo.defaultProps = {
  missingFields: false,
};

export default ContactInfo;
