

import React from 'react';
import { DialogContent, Box, Paragraph } from '../../../..';
export default function Overflow() {
  return React.createElement(Box, {
    height: "10rem",
    display: "flex",
    bg: "white",
    p: "u5"
  }, React.createElement(DialogContent, null, React.createElement(Paragraph, null, "Scroll down here..."), React.createElement(Box, {
    height: "12rem",
    bg: "rebeccapurple"
  })));
}
//# sourceMappingURL=Overflow.js.map