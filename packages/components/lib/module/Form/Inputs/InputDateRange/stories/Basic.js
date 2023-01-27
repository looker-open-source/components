import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "onChange"];

import React from 'react';
import { InputDateRange } from '../InputDateRange';
const noop = () => undefined;
export default function Basic(_ref) {
  let {
      value = {},
      onChange = noop
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(InputDateRange, _extends({
    value: value,
    onChange: onChange
  }, props));
}
//# sourceMappingURL=Basic.js.map