import React, { useState } from 'react';
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
      <form>
        <input name="firstName" type="text" placeholder="First Name" required />
        <input name="lastName" type="text" placeholder="Last Name" required />
        <input name="email" type="email" placeholder="Email" />
        <PhoneInput placeholder="Phone" />
        <button
          className="tertiary-button"
          type="submit"
          onClick={() => {
            answer(info);
          }}
        >
          Request Estimate
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
