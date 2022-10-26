import React from 'react';
import { CopyToClipboard, Button } from '../..';
export default function ChildComponent() {
  return React.createElement(CopyToClipboard, {
    content: "here is some text to be copied",
    success: React.createElement(Button, null, "Success")
  }, React.createElement(Button, null, "Copy stuff"));
}
//# sourceMappingURL=ChildComponent.js.map