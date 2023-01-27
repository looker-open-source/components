import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["readOnly", "defaultValue"];

import React from 'react';
import { InputTime } from '..';
export default function ReadOnly(props) {
  const {
      readOnly = true,
      defaultValue = '10:01'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputTime, _extends({
    readOnly: readOnly,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map