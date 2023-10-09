import React from 'react';
import { Paragraph, Breakpoint, Box2 } from '../..';
export default function MobileLaptop() {
  return React.createElement(Box2, null, React.createElement(Paragraph, {
    mb: "u3"
  }, "Resize window to watch content change:"), React.createElement(Breakpoint, {
    show: ['mobile', 'laptop']
  }, React.createElement(Box2, {
    bg: "criticalAccent",
    p: "u5"
  }, "Render on Mobile (1px \u2013 480px), Tablet (481px \u2013 768px), and Laptop (769px \u2013 1024px)")));
}
//# sourceMappingURL=MobileLaptop.js.map