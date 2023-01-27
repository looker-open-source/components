import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue", "disabled"];

import React from 'react';
import { RangeSlider } from '..';
export default function Disabled(props) {
  const {
      defaultValue = [2, 3],
      disabled = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RangeSlider, _extends({
    defaultValue: defaultValue,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map