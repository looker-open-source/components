
import React, { useState } from 'react';
import { FieldDateRange } from '../FieldDateRange';
export default function Disabled(value) {
  const [range, setRange] = useState(value);
  return React.createElement(FieldDateRange, {
    value: range,
    onChange: setRange,
    disabled: true,
    label: 'Pick a Date'
  });
}
//# sourceMappingURL=Disabled.js.map