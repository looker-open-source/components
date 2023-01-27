

import React, { useState } from 'react';
import { InputChips } from '../';
export default function Summary() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  function handleChange(newValues) {
    setValues(newValues);
  }
  return React.createElement(InputChips, {
    placeholder: "Enter multiple values",
    summary: values.length > 0 ? `You've entered ${values.length} items` : undefined,
    values: values,
    onChange: handleChange
  });
}
//# sourceMappingURL=Summary.js.map