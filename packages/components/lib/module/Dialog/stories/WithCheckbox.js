

import React from 'react';
import { Dialog, DialogLayout, ButtonOutline, Checkbox } from '../..';
export default function WithCheckbox() {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      footer: "Footer",
      header: "Header"
    }, "The top line & bottom shadow should not be there.", React.createElement(Checkbox, {
      checked: true
    }))
  }, React.createElement(ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=WithCheckbox.js.map