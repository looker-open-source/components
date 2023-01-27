

import React from 'react';
import { Box, Space } from '../../..';
export default function SpacingResponsively() {
  return React.createElement(Space, {
    bg: "ui3",
    m: "u1"
  }, React.createElement(Box, {
    pl: ['u2',
    'u4',
    'u8',
    'u12']
  }, "My padding on the left changes with breakpoints"));
}
//# sourceMappingURL=SpacingResponsively.js.map