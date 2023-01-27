

import React from 'react';
import { Select } from '..';
export default function Description() {
  return React.createElement(Select, {
    maxWidth: 400,
    options: [{
      description: 'Popular in the US',
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      description: 'Dutch sheeps milk',
      label: 'Gouda',
      value: 'gouda'
    }, {
      description: 'Full of holes',
      label: 'Swiss',
      value: 'swiss'
    }]
  });
}
//# sourceMappingURL=Description.js.map