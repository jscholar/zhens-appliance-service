import React, { useState } from 'react';

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
          className={`type ${type === 'message' ? 'active' : ''}`}
          onClick={() => setType('message')}
        >
          Leave a Message
        </button>
      </div>
      <div className="card">
        Card
      </div>
    </div>
  );
};

export default Contact;
