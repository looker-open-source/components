
import React from 'react';
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup';
export default function Disabled() {
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
    autoFocus: true,
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options,
    validationMessage: {
      message: 'Select at least 1 cheese',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map