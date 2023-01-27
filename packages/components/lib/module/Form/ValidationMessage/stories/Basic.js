import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["message", "type"];

import React from 'react';
import { ValidationMessage } from '../';
export default function Basic(props) {
  const {
      message = 'Error',
      type = 'error'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ValidationMessage, _extends({
    message: message,
    type: type
  }, restProps));
}
//# sourceMappingURL=Basic.js.map