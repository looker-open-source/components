

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Detail() {
  return React.createElement(FieldSelectMulti, {
    detail: "detail...",
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
//# sourceMappingURL=Detail.js.map