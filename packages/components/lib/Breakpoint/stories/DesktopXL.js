import React from 'react';
import { Paragraph, Breakpoint, Box2 } from '../..';
export default function DesktopXL() {
  return React.createElement(Box2, null, React.createElement(Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), React.createElement(Breakpoint, {
    show: ['desktop', 'xl']
  }, React.createElement(Box2, {
    bg: "keyAccent",
    p: "u5"
  }, "Desktop (1025px - 1200px) and xl screens (1201px and greater)")));
}
//# sourceMappingURL=DesktopXL.js.map