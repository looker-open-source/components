import React from 'react';
import { Paragraph, Breakpoint, Box2 } from '../..';
export default function XL() {
  return React.createElement(Box2, null, React.createElement(Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), React.createElement(Breakpoint, {
    show: "xl"
  }, React.createElement(Box2, {
    bg: "informAccent",
    p: "u5",
    mt: "u3"
  }, "Show on XL only (1201px and larger)")));
}
//# sourceMappingURL=XL.js.map