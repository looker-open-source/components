import React from 'react';
import { Link } from '../..';
export default function External() {
  return React.createElement(Link, {
    href: "https://google.com",
    isExternal: true
  }, "Leaving this domain");
}
External.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=External.js.map