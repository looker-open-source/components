

import React from 'react';
import { FieldSelect } from '../../FieldSelect';
export default function Description() {
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
    description: "I'm a little teapot"
  });
}
//# sourceMappingURL=Description.js.map