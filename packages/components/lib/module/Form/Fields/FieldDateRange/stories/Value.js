
import React, { useState } from 'react';
import { FieldDateRange } from '../FieldDateRange';
export default function Value(value) {
  return React.createElement(FieldDateRange, {
    value: {
      from: new Date('May 18, 2020'),
      to: new Date('May 21, 2020')
    },
    onChange: useState(value)[1],
    label: 'Pick a Date'
  });
}
//# sourceMappingURL=Value.js.map