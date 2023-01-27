

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function FreeInput() {
  return React.createElement(FieldSelectMulti, {
    description: "free input, write anything",
    label: "Label",
    options: [{
      label: 'Grape',
      value: 'grape'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Apple',
      value: 'apple'
    }],
    placeholder: "Search fruits",
    isFilterable: true,
    freeInput: true
  });
}
//# sourceMappingURL=FreeInput.js.map