import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

import React from 'react';
import { Label } from '../';
export default function Basic(props) {
  const {
      children = 'Label Text'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Label, restProps, children);
}
//# sourceMappingURL=Basic.js.map