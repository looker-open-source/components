import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["min", "max", "defaultValue"];

import React from 'react';
import { RangeSlider } from '..';
export default function InvalidValue(props) {
  const {
      min = 100,
      max = 200,
      defaultValue = [105, 1950]
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RangeSlider, _extends({
    min: min,
    max: max,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=InvalidValue.js.map