import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue"];

import React from 'react';
import { InputTime } from '..';
export default function DefaultValue(props) {
  const {
      defaultValue = '15:45'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputTime, _extends({
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=DefaultValue.js.map