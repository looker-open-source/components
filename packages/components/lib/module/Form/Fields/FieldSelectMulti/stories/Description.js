

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Description() {
  return React.createElement(FieldSelectMulti, {
    description: "this is the description",
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
    isFilterable: true
  });
}
//# sourceMappingURL=Description.js.map