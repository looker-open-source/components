

import React from 'react';
import { Select } from '..';
export default function Groups() {
  return React.createElement(Select, {
    maxWidth: 400,
    options: [{
      label: 'CHEESES',
      options: [{
        label: 'Cheddar',
        value: 'cheddar'
      }, {
        label: 'Gouda',
        value: 'gouda'
      }, {
        label: 'Swiss',
        value: 'swiss'
      }]
    }, {
      label: 'FRUITS',
      options: [{
        label: 'Grapes',
        value: 'grape'
      }, {
        label: 'Apples',
        value: 'apple'
      }, {
        label: 'Strawberries',
        value: 'strawberries'
      }]
    }, {
      options: [{
        label: 'Pizza',
        value: 'pizza'
      }, {
        label: 'Hamburgers',
        value: 'hamburgers'
      }]
    }]
  });
}
//# sourceMappingURL=Groups.js.map