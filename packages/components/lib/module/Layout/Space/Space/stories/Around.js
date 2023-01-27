import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["around"];
import React from 'react';
import { Space, Button } from '../../../..';
export default function Around(props) {
  const {
      around = true
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, _extends({}, rest, {
    around: around
  }), React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));
}
//# sourceMappingURL=Around.js.map