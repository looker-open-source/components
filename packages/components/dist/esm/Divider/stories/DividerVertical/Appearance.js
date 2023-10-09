import React from 'react';
import { DividerVertical, Space, Box } from '../../..';
export default function Appearance() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Box, {
    bg: "white ",
    p: "u8"
  }, "light appearance", React.createElement(DividerVertical, {
    mt: "u4",
    appearance: "light"
  })), React.createElement(Box, {
    bg: "ui1",
    p: "u8"
  }, "dark appearance", React.createElement(DividerVertical, {
    mt: "u4",
    appearance: "dark"
  })), React.createElement(Box, {
    bg: "ui5",
    p: "u8"
  }, "onDark appearance", React.createElement(DividerVertical, {
    mt: "u4",
    appearance: "onDark"
  })));
}
//# sourceMappingURL=Appearance.js.map