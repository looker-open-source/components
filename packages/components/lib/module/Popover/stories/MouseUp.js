
import React from 'react';
import { SpaceVertical, Paragraph, Space, Button } from '@looker/components';
import { Popover } from '..';
export default function MouseUp() {
  return React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Test that the the 1st click outside is cancelled and that clicking the Popover's trigger a 2nd time closes the Popover"), React.createElement(Paragraph, null, "Previously, the useCapture = true on the mouseup listener caused the click outside behavior to break on any page that has a React onMouseUp on any element."), React.createElement(Space, null, React.createElement(Popover, {
    content: "Popover 1"
  }, React.createElement(Button, null, "Open 1st Popover")), React.createElement(Popover, {
    content: "Popover 2"
  }, React.createElement(Button, null, "Open 2nd Popover")), React.createElement(Button, {
    onClick: () => alert('I should be canceled if a Popover was open')
  }, "Click"), React.createElement(Button, {
    onMouseUp: () => alert('A simple onMouseUp')
  }, "onMouseUp")));
}
//# sourceMappingURL=MouseUp.js.map