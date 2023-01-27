
import React from 'react';
import { Space, SpaceVertical, Button } from '../../../..';
export default function VerticalProperties(props) {
  return React.createElement(SpaceVertical, props, React.createElement(Space, null, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")), React.createElement(Space, {
    align: "start"
  }, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")), React.createElement(Space, {
    align: "end"
  }, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")));
}
//# sourceMappingURL=VerticalProperties.js.map