import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["match"];

import React from 'react';
import { ReplaceText } from '../ReplaceText';
export default function Basic(_ref) {
  let {
      match = 'che'
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(ReplaceText, _extends({
    match: match
  }, props), "Cheddar cheese");
}
//# sourceMappingURL=Basic.js.map