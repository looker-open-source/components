
import React from 'react';
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup';
export default function DisabledOption() {
  const options = [{
    label: 'Cheddar',
    value: 'cheddar'
  }, {
    label: 'Gouda',
    value: 'gouda'
  }, {
    disabled: true,
    label: 'Swiss',
    value: 'swiss'
  }, {
    label: 'Roquefort',
    value: 'roquefort'
  }];
  return React.createElement(FieldCheckboxGroup, {
    autoFocus: true,
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options
  });
}
//# sourceMappingURL=DisabledOption.js.map