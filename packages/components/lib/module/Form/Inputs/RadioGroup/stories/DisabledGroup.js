import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["options", "defaultValue", "disabled"];

import React from 'react';
import { RadioGroup } from '..';
const mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
export default function DisabledGroup(props) {
  const {
      options = mockOptions,
      defaultValue = 'cheddar',
      disabled = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RadioGroup, _extends({
    defaultValue: defaultValue,
    disabled: disabled,
    name: "group1",
    options: options
  }, restProps));
}
//# sourceMappingURL=DisabledGroup.js.map