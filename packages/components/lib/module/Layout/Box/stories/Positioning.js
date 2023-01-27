

import React from 'react';
import { Box, Space } from '../../..';
export default function Positioning() {
  return React.createElement(Space, {
    bg: "ui3",
    m: "u1"
  }, React.createElement(Box, {
    p: "u3",
    position: "relative"
  }, React.createElement(Box, {
    position: "absolute",
    top: "0",
    right: "0",
    bg: "negative",
    color: "inverseOn"
  }, "I'm absolutely positioned!")));
}
//# sourceMappingURL=Positioning.js.map