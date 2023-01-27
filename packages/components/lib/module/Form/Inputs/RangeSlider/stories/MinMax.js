import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["min", "max", "defaultValue"];

import React from 'react';
import { RangeSlider } from '..';
export default function MinMax(props) {
  const {
      min = 10,
      max = 20,
      defaultValue = [13, 17]
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RangeSlider, _extends({
    min: min,
    max: max,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=MinMax.js.map