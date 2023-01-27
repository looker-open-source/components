

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Values() {
  return React.createElement(FieldSelectMulti, {
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
    defaultValues: ['Apples', 'Oranges']
  });
}
//# sourceMappingURL=Values.js.map