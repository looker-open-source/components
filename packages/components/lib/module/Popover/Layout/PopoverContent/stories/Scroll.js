

import React from 'react';
import { Box, Paragraph } from '@looker/components';
import { PopoverContent } from '../..';
export default function Scroll() {
  return React.createElement(Box, {
    height: "10rem",
    display: "flex",
    bg: "white",
    p: "u5"
  }, React.createElement(PopoverContent, null, React.createElement(Paragraph, null, "Scroll down here..."), React.createElement(Box, {
    height: "6rem",
    bg: "rebeccapurple"
  })));
}
//# sourceMappingURL=Scroll.js.map