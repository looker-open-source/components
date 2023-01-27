import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["validationType"];

import React from 'react';
import { InputTime } from '..';
export default function ValidationError(props) {
  const {
      validationType = 'error'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputTime, _extends({
    validationType: validationType
  }, restProps));
}
//# sourceMappingURL=ValidationError.js.map