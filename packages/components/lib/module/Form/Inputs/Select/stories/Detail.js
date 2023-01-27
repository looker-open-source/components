

import React from 'react';
import { Select } from '..';
export default function Detail() {
  return React.createElement(Select, {
    maxWidth: 400,
    placeholder: "Select food",
    options: [{
      detail: 'Cheese',
      value: 'Gouda'
    }, {
      detail: 'Fruit',
      value: 'Apple'
    }]
  });
}
//# sourceMappingURL=Detail.js.map