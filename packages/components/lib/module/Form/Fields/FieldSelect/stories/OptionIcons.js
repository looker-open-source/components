

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { FieldSelect } from '../../FieldSelect';
export default function OptionIcons() {
  return React.createElement(FieldSelect, {
    name: "Cheeses",
    label: "Cheeses",
    defaultValue: "cheddar",
    options: [{
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Gouda',
      value: 'gouda'
    }, {
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Swiss',
      value: 'swiss'
    }]
  });
}
//# sourceMappingURL=OptionIcons.js.map