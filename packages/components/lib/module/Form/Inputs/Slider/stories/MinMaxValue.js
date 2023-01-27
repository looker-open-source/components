import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["min", "max", "value"];

import React from 'react';
import { Slider } from '..';
export default function MinMaxValue(props) {
  const {
      min = 10,
      max = 20,
      value = 15
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Slider, _extends({
    min: min,
    max: max,
    value: value
  }, restProps));
}
//# sourceMappingURL=MinMaxValue.js.map