import React, { useState } from 'react';
import Phone from '../components/Phone';
import Email from '../components/Email';
import Card from '../components/UI/Card';

const Contact = () => {
  const [type, setType] = useState('phone');

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
        <div className={`phone-wrapper ${type === 'phone' ? '' : 'hidden'}`}>
          <Card>
            <Phone />
          </Card>
        </div>
        <div className={`email-wrapper ${type !== 'phone' ? '' : 'hidden'}`}>
          <Card>
            <Email />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
