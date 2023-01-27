

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Required() {
  return React.createElement(FieldSelectMulti, {
    description: "required",
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
    required: true
  });
}
//# sourceMappingURL=Required.js.map