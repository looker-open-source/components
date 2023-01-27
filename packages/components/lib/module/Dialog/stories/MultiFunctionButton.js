

import React from 'react';
import { Dialog, DialogLayout, SpaceVertical, CopyToClipboard, Button } from '../..';
export default function MultiFunctionButton() {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "A Dialog Example"
    }, React.createElement(SpaceVertical, null, React.createElement(CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, React.createElement(Button, null, "Copy"))))
  }, React.createElement(Button, null, "Open Dialog"));
}
//# sourceMappingURL=MultiFunctionButton.js.map