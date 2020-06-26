import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-auto-format';

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
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          required
          onChange={() => {

          }}
        />
        <input name="lastName" type="text" placeholder="Last Name" required />
        <input name="email" type="email" placeholder="Email" />
        <PhoneInput placeholder="Phone" />
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
