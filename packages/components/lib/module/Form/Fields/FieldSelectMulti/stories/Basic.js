import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';
export default function Basic(props) {
  return React.createElement(FieldSelectMulti, _extends({
    label: "Label",
    options: [{
      label: 'Grape',
      value: 'grape'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Apple',
      value: 'apple'
    }],
    placeholder: "Search fruits",
    isFilterable: true
  }, props));
}
//# sourceMappingURL=Basic.js.map