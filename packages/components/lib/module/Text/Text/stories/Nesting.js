
import React from 'react';
import { Text } from '..';
export default function Nesting() {
  return React.createElement("div", {
    style: {
      color: '#c00'
    }
  }, React.createElement(Text, null, "This text should be red"));
}
//# sourceMappingURL=Nesting.js.map