

import React from 'react';
import { Select } from '..';
export default function AutoResize() {
  return React.createElement(Select, {
    autoResize: true,
    placeholder: "Width adjusts to current value",
    options: [{
      label: 'Short label',
      value: 'short'
    }, {
      label: 'Very long label that widens the input considerably',
      value: 'long'
    }]
  });
}
//# sourceMappingURL=AutoResize.js.map