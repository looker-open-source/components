import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["reverse"];
import React from 'react';
import { Space, Button } from '../../../..';
export default function Reverse(props) {
  const {
      reverse = true
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, _extends({}, rest, {
    reverse: reverse
  }), React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));
}
//# sourceMappingURL=Reverse.js.map