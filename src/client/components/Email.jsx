import React from 'react';

const Email = () => (
  <div className="email card">
    <p>Leave a message</p>
    <form>
      <div className="field">
        <label htmlFor="firstName">
          Name
          <br />
          <input name="firstName" type="text" placeholder="First Name" required />
          <input name="lastName" type="text" placeholder="Last Name" required />
        </label>
      </div>
      <div className="field">
        <label htmlFor="email">
          Email
          <br />
          <input name="email" type="email" required />
        </label>
      </div>
      <div className="field field-message">
        <label htmlFor="message">
          Message
          <br />
          <textarea name="message" required />
        </label>
      </div>
      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  </div>
);

export default Email;
