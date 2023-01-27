import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { FieldSelect } from '../../FieldSelect';
export default function Basic(props) {
  return React.createElement(FieldSelect, _extends({
    name: "Cheeses",
    label: "Cheeses",
    defaultValue: "cheddar",
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
  }, props));
}
//# sourceMappingURL=Basic.js.map