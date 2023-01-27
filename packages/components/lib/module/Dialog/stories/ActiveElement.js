

import React from 'react';
import { Dialog, Button, DialogLayout, InputText, Select, SpaceVertical } from '../..';
export default function ActiveElement() {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, null, React.createElement(SpaceVertical, null, React.createElement(InputText, null), React.createElement(Select, {
      options: [{
        label: '1',
        value: '1'
      }],
      placeholder: "Choose value"
    }), React.createElement("select", null, React.createElement("option", null, "1"))))
  }, React.createElement(Button, null, "Open Dialog"));
}
//# sourceMappingURL=ActiveElement.js.map