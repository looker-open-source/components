

import React from 'react';
import { Select } from '..';
export default function Disabled() {
  return React.createElement(Select, {
    disabled: true,
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
//# sourceMappingURL=Disabled.js.map