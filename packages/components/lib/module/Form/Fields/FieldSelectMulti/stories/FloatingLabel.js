

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function FloatingLabel() {
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
    externalLabel: false
  });
}
//# sourceMappingURL=FloatingLabel.js.map