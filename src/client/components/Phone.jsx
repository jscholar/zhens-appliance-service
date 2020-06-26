import React from 'react';

const Phone = () => (
  <div className="phone">
    <p>
      {'Call or Text '}
      <span className="alias">Zhen</span>
      {' at'}
      <br />
      <span className="number">206-488-9778</span>
    </p>
    <table className="hours">
      <caption>Call-Hours (PST)</caption>
      <tbody>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
          <tr key={day}>
            <td>{day}</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Phone;
