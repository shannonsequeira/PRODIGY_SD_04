import React from 'react';
import { FormControl } from 'react-bootstrap';

const Cell = ({ value, onChange, row, col }) => {
  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1 && val <= 9) {
      onChange(row, col, val);
    } else if (e.target.value === '') {
      onChange(row, col, 0);
    }
  };

  return (
    <FormControl
      type="text"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      className="cell"
    />
  );
};

export default Cell;
