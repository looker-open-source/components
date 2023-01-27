

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function Validation() {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(FieldColor, {
    label: "Basic",
    value: value,
    onChange: handleChange,
    validationMessage: {
      message: 'Error!',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map