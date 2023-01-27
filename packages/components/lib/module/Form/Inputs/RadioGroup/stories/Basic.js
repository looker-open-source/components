import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["options", "defaultValue"];

import React from 'react';
import { RadioGroup } from '../';
const mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
export default function Basic(props) {
  const {
      options = mockOptions,
      defaultValue = 'cheddar'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RadioGroup, _extends({
    defaultValue: defaultValue,
    name: "group1",
    options: options
  }, restProps));
}
//# sourceMappingURL=Basic.js.map