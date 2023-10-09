import React from 'react';
import { Paragraph, Breakpoint, Box2 } from '../..';
export default function Desktop() {
  return React.createElement(Box2, null, React.createElement(Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), React.createElement(Breakpoint, {
    show: "desktop"
  }, React.createElement(Box2, {
    bg: "positiveAccent",
    p: "u5",
    mt: "u3"
  }, "Show on desktop only (1025px \u2013 1200px)")));
}
//# sourceMappingURL=Desktop.js.map