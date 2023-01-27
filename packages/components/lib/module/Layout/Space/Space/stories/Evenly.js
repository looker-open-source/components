import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["evenly"];
import React from 'react';
import { Space, Button } from '../../../..';
export default function Evenly(props) {
  const {
      evenly = true
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, _extends({}, rest, {
    evenly: evenly
  }), React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));
}
//# sourceMappingURL=Evenly.js.map