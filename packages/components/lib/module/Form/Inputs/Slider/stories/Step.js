import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["max", "step"];

import React from 'react';
import { Slider } from '..';
export default function Step(props) {
  const {
      max = 10000,
      step = 2500
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Slider, _extends({
    max: max,
    step: step
  }, restProps));
}
//# sourceMappingURL=Step.js.map