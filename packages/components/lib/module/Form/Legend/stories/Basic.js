import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

import React from 'react';
import { Legend } from '../';
export default function Basic(props) {
  const {
      children = 'I am legend'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Legend, restProps, children);
}
//# sourceMappingURL=Basic.js.map