

import React from 'react';
import { SelectMulti } from '..';
import { Space } from '../../../../../Layout';
export default function ClearIconLabel() {
  return React.createElement(Space, null, React.createElement(SelectMulti, {
    clearIconLabel: "remove all chips",
    defaultValues: ['Cheddar'],
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }],
    placeholder: "Cheeses"
  }), React.createElement(SelectMulti, {
    defaultValues: ['Gouda', 'Feta'],
    chipIconLabel: "remove this chip",
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }]
  }), React.createElement(SelectMulti, {
    clearIconLabel: "remove all chips",
    defaultValues: ['Cheddar', 'Swiss'],
    chipIconLabel: "remove this chip",
    flex: 1,
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }]
  }));
}
//# sourceMappingURL=ClearIconLabel.js.map