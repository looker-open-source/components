

import React from 'react';
import { FieldSelect } from '../../FieldSelect';
export default function AutoResize() {
  return React.createElement(FieldSelect, {
    name: "Cheeses",
    label: "Cheeses",
    defaultValue: "cheddar",
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
    autoResize: true
  });
}
//# sourceMappingURL=AutoResize.js.map