

import React from 'react';
import { FieldSelect } from '../../FieldSelect';
export default function Detail() {
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
    detail: "0/50"
  });
}
//# sourceMappingURL=Detail.js.map