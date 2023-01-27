import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue", "readOnly"];

import React from 'react';
import { RangeSlider } from '..';
export default function ReadOnly(props) {
  const {
      defaultValue = [2, 3],
      readOnly = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RangeSlider, _extends({
    defaultValue: defaultValue,
    readOnly: readOnly
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map