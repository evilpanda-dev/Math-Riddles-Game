import React, { useState } from 'react';

const Settings = ({ onChange }) => {
  const [operation, setOperation] = useState('addition');
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (min && max && onChange) {
      onChange({ operation, numberRange: [parseInt(min), parseInt(max)] });
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Operation:
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
            <option value="multiplication">Multiplication</option>
          </select>
        </label>
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Settings;
