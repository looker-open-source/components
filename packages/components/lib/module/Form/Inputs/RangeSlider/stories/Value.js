import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "defaultValue"];

import React from 'react';
import { RangeSlider } from '..';
export default function Value(props) {
  const {
      value = [3, 8],
      defaultValue = [3, 8]
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(React.Fragment, null, React.createElement(RangeSlider, _extends({
    defaultValue: defaultValue
  }, restProps)), React.createElement(RangeSlider, _extends({
    value: value
  }, restProps)));
}
//# sourceMappingURL=Value.js.map