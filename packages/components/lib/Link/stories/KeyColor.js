import React from 'react';
import { Link } from '../..';
export default function KeyColor() {
  return React.createElement(React.Fragment, null, React.createElement(Link, {
    href: "https://google.com",
    keyColor: true
  }, "Rendered in the brand color"));
}
KeyColor.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=KeyColor.js.map