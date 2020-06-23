import React from 'react';

const Email = (props) => (
  <div className="email">
    <p>Leave a message</p>
    <div>
      <form>
        <div>
          <label htmlFor="firstName">
            First Name
            <input name="firstName" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name
            <input name="lastName" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input name="email" type="email" required />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <textarea />
          </label>
        </div>
      </form>
    </div>
  </div>
);

export default Email;
