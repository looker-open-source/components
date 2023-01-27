

import React from 'react';
import { Select } from '..';
export default function Error() {
  return React.createElement(Select, {
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }],
    validationType: "error"
  });
}
//# sourceMappingURL=Error.js.map