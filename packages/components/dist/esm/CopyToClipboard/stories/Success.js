import React from 'react';
import { CopyToClipboard } from '../..';
export default function Success() {
  return React.createElement(CopyToClipboard, {
    content: "here is some text to be copied",
    success: "it was copied"
  });
}
//# sourceMappingURL=Success.js.map