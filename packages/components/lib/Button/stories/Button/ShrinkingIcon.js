import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Button, Box2 } from '../../..';
export default function ShrinkingIcon() {
  return React.createElement(Box2, {
    display: "flex"
  }, React.createElement(Box2, {
    width: "100%"
  }, "Some text"), React.createElement(Button, {
    iconBefore: React.createElement(MaterialIcons.AddCircle, null)
  }, "Button"));
}
//# sourceMappingURL=ShrinkingIcon.js.map