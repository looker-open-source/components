
import React from 'react';
import { InlineInputText } from '../InlineInputText';
export default function OverflowHiddenInlineInputText() {
  return React.createElement("div", {
    style: {
      border: '1px solid',
      overflow: 'hidden',
      width: '100px'
    }
  }, React.createElement(InlineInputText, {
    value: "Long example value that should require scrolling to reach"
  }));
}
//# sourceMappingURL=OverflowHiddenInlineInputText.js.map