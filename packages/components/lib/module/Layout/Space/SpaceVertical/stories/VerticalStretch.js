import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["align"];
import React from 'react';
import { SpaceVertical, Button } from '../../../..';
export default function VerticalStretch(props) {
  const {
      align = 'stretch'
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(SpaceVertical, _extends({}, rest, {
    align: align
  }), React.createElement(Button, null, "Button A"), React.createElement(Button, null, "Button B"), React.createElement(Button, null, "Button C"));
}
//# sourceMappingURL=VerticalStretch.js.map