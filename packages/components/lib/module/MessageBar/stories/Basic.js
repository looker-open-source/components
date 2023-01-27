import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

import React from 'react';
import { MessageBar } from '../..';
export default function Basic(props) {
  const {
      children = 'Hey! This is a message to you.'
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(MessageBar, rest, children);
}
//# sourceMappingURL=Basic.js.map