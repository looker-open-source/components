

import React from 'react';
import { Box, Space } from '../../..';
export default function HeightsWidths() {
  return React.createElement(Space, {
    bg: "ui3",
    m: "u1"
  }, React.createElement(Box, {
    display: "inline-block",
    height: "100px",
    bg: "positive",
    color: "inverseOn",
    p: "u3",
    minWidth: "200px"
  }, "I'm 100px tall."), React.createElement(Box, {
    display: "inline-block",
    height: "50px",
    bg: "inform",
    color: "inverseOn",
    ml: "u3",
    p: "u3",
    width: "100px",
    fontSize: "small"
  }, "I'm 50px tall."));
}
//# sourceMappingURL=HeightsWidths.js.map