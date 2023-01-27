

import React from 'react';
import { Box, Space } from '../../..';
export default function Customized() {
  return React.createElement(Space, {
    bg: "ui3",
    m: "u1"
  }, React.createElement(Box, {
    display: "inline"
  }, "I'm inline."), React.createElement(Box, {
    display: "inline"
  }, "I'm also inline."));
}
//# sourceMappingURL=Customized.js.map