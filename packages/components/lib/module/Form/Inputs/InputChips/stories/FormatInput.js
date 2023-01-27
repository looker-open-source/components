

import React, { useState } from 'react';
import { InputChips } from '../';
export default function FormatInput() {
  const [values, setValues] = useState([]);
  return React.createElement(InputChips, {
    placeholder: "Transform values to UPPERCASE",
    values: values,
    onChange: setValues,
    formatInputValue: val => val.toUpperCase()
  });
}
//# sourceMappingURL=FormatInput.js.map