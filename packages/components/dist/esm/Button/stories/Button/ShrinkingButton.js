import React from 'react';
import { Button, Box2 } from '../../..';
export default function ShrinkingButton() {
  return React.createElement(Box2, {
    display: "flex",
    width: 200
  }, React.createElement(Box2, {
    width: 250
  }, "Some text"), React.createElement(Button, null, "Don't shrink me"));
}
//# sourceMappingURL=ShrinkingButton.js.map