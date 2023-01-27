
import React from 'react';
import { Heading } from '../Heading';
export default function TextAlign() {
  return React.createElement(React.Fragment, null, React.createElement(Heading, {
    textAlign: "left"
  }, "\u25C0\uFE0F Align left (Default) "), React.createElement(Heading, {
    textAlign: "center"
  }, "\u25C0\uFE0F Align Center \u25B6\uFE0F"), React.createElement(Heading, {
    textAlign: "right"
  }, "Align Right \u25B6\uFE0F"));
}
//# sourceMappingURL=TextAlign.js.map