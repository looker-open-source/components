
import React, { useState } from 'react';
import { FieldDateRange } from '../FieldDateRange';
export default function Basic(value) {
  const [range, setRange] = useState(value);
  return React.createElement(FieldDateRange, {
    value: range,
    onChange: setRange,
    label: 'Pick a Date'
  });
}
//# sourceMappingURL=Basic.js.map