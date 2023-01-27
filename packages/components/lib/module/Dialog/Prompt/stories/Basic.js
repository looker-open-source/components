

import React from 'react';
import { Prompt, Button } from '../../..';
export default function Basic() {
  return React.createElement(Prompt, {
    cancelColor: "neutral",
    cancelLabel: 'Not into cheese',
    title: 'Choose a cheese!',
    inputLabel: 'Name of Cheese',
    saveLabel: 'Save',
    onCancel: close => {
      alert('Prompt closed');
      close();
    },
    onSave: (value, close) => {
      alert(`You chose ${value}`);
      close();
    },
    secondary: React.createElement(Button, {
      onClick: () => alert('Secondary clicked')
    }, "Secondary Cheese")
  }, open => React.createElement(Button, {
    onClick: open
  }, "Prompt"));
}
//# sourceMappingURL=Basic.js.map