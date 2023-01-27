

import React from 'react';
import { FieldSelect } from '../../FieldSelect';
export default function Disabled() {
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
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map