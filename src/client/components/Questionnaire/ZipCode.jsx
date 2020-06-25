import React from 'react';

const ZipCode = ({ answer }) => (
  <div className="zip">
    <label htmlFor="zip">
      <input id="zip" name="zip" type="text" pattern="[0-9]*" />
    </label>
  </div>
);

export default ZipCode;
