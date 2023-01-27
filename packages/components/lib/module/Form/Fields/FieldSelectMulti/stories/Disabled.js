

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Disabled() {
  return React.createElement(FieldSelectMulti, {
    description: "disabled",
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
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map