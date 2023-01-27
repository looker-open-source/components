

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Description() {
  return React.createElement(FieldSelectMulti, {
    description: "this is the description",
    label: "Label",
    options: [{
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Grape',
      value: 'grape'
    }, {
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Banana',
      value: 'banana'
    }, {
      icon: React.createElement(MaterialIcons.Add, null),
      label: 'Apple',
      value: 'apple'
    }],
    placeholder: "Search fruits",
    isFilterable: true
  });
}
//# sourceMappingURL=CustomIndicator.js.map