

import React from 'react';
import { Box, Space, Code } from '../../..';
export default function BackgroundColors() {
  return React.createElement(Space, {
    bg: "ui3",
    m: "u1"
  }, React.createElement(Box, {
    bg: "positive",
    color: "inverseOn",
    p: "u4"
  }, "My background is ", React.createElement(Code, null, "positive"), "."));
}
//# sourceMappingURL=BackgroundColors.js.map