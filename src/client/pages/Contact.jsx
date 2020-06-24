import React, { useState } from 'react';
import Phone from '../components/Phone';
import Email from '../components/Email';

const Contact = () => {
  const [type, setType] = useState('phone');
  const cardElement = type === 'phone' ? <Phone /> : <Email />;

  return (
    <div className="contact">
      <div className="selection">
        <button
          type="button"
          className={`type ${type === 'phone' ? 'active' : ''}`}
          onClick={() => setType('phone')}
        >
          Call or Text
        </button>
        <div className="divider" />
        <button
          type="button"
          className={`type ${type === 'email' ? 'active' : ''}`}
          onClick={() => setType('email')}
        >
          Leave a Message
        </button>
      </div>
      <div className="content">
        {cardElement}
      </div>
    </div>
  );
};

export default Contact;
