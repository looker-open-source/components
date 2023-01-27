import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["gap"];
import React from 'react';
import { Space, Button } from '../../../..';
export default function Gap(props) {
  const {
      gap = 'u8'
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, _extends({}, rest, {
    gap: gap
  }), React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));
}
//# sourceMappingURL=Gap.js.map