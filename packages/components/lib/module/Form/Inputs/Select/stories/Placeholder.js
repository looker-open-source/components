

import React from 'react';
import { Select } from '..';
export default function Placeholder() {
  return React.createElement(Select, {
    placeholder: "Select your cheese of choice...",
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }]
  });
}
//# sourceMappingURL=Placeholder.js.map