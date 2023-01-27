

import React from 'react';
import { FieldRadioGroup } from '../';
export default function Basic() {
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
  }, {
    label: 'Cheddar',
    value: 'cheddar-2'
  }, {
    label: 'Gouda',
    value: 'gouda 2'
  }, {
    disabled: true,
    label: 'Swiss',
    value: 'swiss-2'
  }, {
    label: 'Roquefort',
    value: 'roquefort-2'
  }, {
    label: 'Cheddar',
    value: 'cheddar-3'
  }, {
    label: 'Gouda',
    value: 'gouda-3'
  }, {
    disabled: true,
    label: 'Swiss',
    value: 'swiss-3'
  }, {
    label: 'Roquefort',
    value: 'roquefort-3'
  }];
  return React.createElement(FieldRadioGroup, {
    autoFocus: true,
    label: "Cheeses",
    description: "Pick all your cheeses",
    options: options
  });
}
//# sourceMappingURL=Basic.js.map