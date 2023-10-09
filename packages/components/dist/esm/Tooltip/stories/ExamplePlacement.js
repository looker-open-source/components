import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
import { Space } from '../../Layout';
export default function ExamplePlacement() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Tooltip, {
    content: "I'm on top",
    placement: "top"
  }, React.createElement(Button, null, "Top")), React.createElement(Tooltip, {
    content: "I'm on bottom",
    placement: "bottom"
  }, React.createElement(Button, null, "Bottom")), React.createElement(Tooltip, {
    content: "I'm on the left",
    placement: "left"
  }, React.createElement(Button, null, "Left")), React.createElement(Tooltip, {
    content: "I'm on the right",
    placement: "right"
  }, React.createElement(Button, null, "Right")));
}
//# sourceMappingURL=ExamplePlacement.js.map