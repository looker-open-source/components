import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled"];

import React from 'react';
import { Slider } from '..';
export default function Disabled(props) {
  const {
      disabled = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Slider, _extends({
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map