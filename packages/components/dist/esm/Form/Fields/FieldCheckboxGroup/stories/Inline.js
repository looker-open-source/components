import React from 'react';
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup';
export default function Inline() {
  const options = [{
    label: 'Cheddar',
    value: 'cheddar'
  }, {
    label: 'Gouda',
    value: 'gouda'
  }, {
    label: 'Swiss',
    value: 'swiss'
  }, {
    label: 'Roquefort',
    value: 'roquefort'
  }];
  return React.createElement(FieldCheckboxGroup, {
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options,
    inline: true
  });
}
//# sourceMappingURL=Inline.js.map