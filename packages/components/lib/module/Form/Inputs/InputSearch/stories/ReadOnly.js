import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "readOnly"];

import React from 'react';
import { InputSearch } from '../';
export default function ReadOnly(props) {
  const {
      value = "You can't change me.",
      readOnly = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    value: value,
    readOnly: readOnly
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map