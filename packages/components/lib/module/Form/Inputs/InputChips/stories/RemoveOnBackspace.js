

import React, { useState } from 'react';
import { InputChips } from '../';
export default function RemoveOnBackspace() {
  const [values, setValues] = useState(['cheddar', 'gouda']);
  function handleChange(newValues) {
    setValues(newValues);
  }
  return React.createElement(InputChips, {
    placeholder: "Backspace does not remove values",
    values: values,
    onChange: handleChange,
    removeOnBackspace: false
  });
}
//# sourceMappingURL=RemoveOnBackspace.js.map