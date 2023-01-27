import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["min", "max", "value"];

import React from 'react';
import { Slider } from '..';
export default function InvalidValue(props) {
  const {
      min = 0,
      max = 10,
      value = 5000
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Slider, _extends({
    min: min,
    max: max,
    value: value
  }, restProps));
}
//# sourceMappingURL=InvalidValue.js.map