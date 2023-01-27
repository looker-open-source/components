
import React from 'react';
import { Space, SpaceVertical, Button } from '../../../..';
export default function Properties(props) {
  return React.createElement(Space, props, React.createElement(SpaceVertical, null, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")), React.createElement(SpaceVertical, {
    align: "center"
  }, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")), React.createElement(SpaceVertical, {
    align: "end"
  }, React.createElement(Button, null, "Button A"), React.createElement(Button, {
    size: "small"
  }, "Button B"), React.createElement(Button, {
    size: "large"
  }, "Button C")));
}
//# sourceMappingURL=Properties.js.map