import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-phone-number-input/input';

const ContactInfo = ({ answer }) => {
  const [info, setInfo] = useState({});

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
        <button
          className="tertiary-button"
          type="submit"
        >
          Request Estimate
        </button>
      </form>
    </div>
  );
};

ContactInfo.propTypes = {
  answer: PropTypes.func.isRequired,
};

export default ContactInfo;
