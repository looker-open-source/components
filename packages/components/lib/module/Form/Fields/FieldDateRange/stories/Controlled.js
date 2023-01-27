
import React, { useState } from 'react';
import { FieldDateRange } from '../FieldDateRange';
export default function Controlled(externalLabel, value) {
  const [range, setRange] = useState({
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020')
  });
  return React.createElement(FieldDateRange, {
    value: range,
    onChange: setRange,
    label: 'Pick a Date'
  });
}
//# sourceMappingURL=Controlled.js.map