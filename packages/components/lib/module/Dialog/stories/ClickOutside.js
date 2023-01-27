

import React from 'react';
import { Dialog } from '../..';
export default function ClickOutside() {
  return React.createElement(React.Fragment, null, React.createElement("input", {
    type: "text",
    style: {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: 100
    }
  }), React.createElement(Dialog, {
    content: React.createElement(React.Fragment, null, React.createElement("button", null, "button 1"), React.createElement("button", null, "button 2"))
  }, React.createElement("button", null, "Open Dialog")));
}
//# sourceMappingURL=ClickOutside.js.map