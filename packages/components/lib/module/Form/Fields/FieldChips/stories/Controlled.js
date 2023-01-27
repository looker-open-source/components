

import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Controlled() {
  const [values, setValues] = useState(['bananas']);
  const [inputValue, setInputValue] = useState('oranges');
  const handleChange = vals => setValues(vals);
  const handleInputChange = value => setInputValue(value);
  return React.createElement(FieldChips, {
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    summary: "summary"
  });
}
//# sourceMappingURL=Controlled.js.map