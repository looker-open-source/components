
import React, { useState } from 'react';
import { FieldDateRange } from '../FieldDateRange';
export default function Error(value) {
  const [range, setRange] = useState(value);
  return React.createElement(FieldDateRange, {
    value: range,
    onChange: setRange,
    label: 'Pick a Date',
    validationMessage: {
      message: 'Field Disabled',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Error.js.map