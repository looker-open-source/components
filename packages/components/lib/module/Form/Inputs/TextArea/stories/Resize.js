

import React from 'react';
import { TextArea } from '../..';
export default function Resize() {
  return React.createElement(React.Fragment, null, React.createElement(TextArea, {
    resize: true,
    placeholder: "resize vertically"
  }), React.createElement(TextArea, {
    resize: "none",
    placeholder: "no resize"
  }), React.createElement(TextArea, {
    resize: false,
    placeholder: "no resize"
  }), React.createElement(TextArea, {
    resize: "vertical",
    placeholder: "only resize vertically"
  }));
}
//# sourceMappingURL=Resize.js.map