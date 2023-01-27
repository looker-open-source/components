

import React from 'react';
import { Dialog, DialogLayout, Button } from '../..';
export default function CloseIconButton() {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }, React.createElement(Button, null, "Open Dialog"));
}
//# sourceMappingURL=CloseIconButton.js.map