

import React, { useState } from 'react';
import { Button, usePrompt } from '../../..';
export default function UsePrompt() {
  const [tracking, setTracking] = useState('pizza');
  const [prompt, open] = usePrompt({
    clearOnCancel: true,
    defaultValue: tracking,
    inputLabel: 'Name of Cheese',
    onSave: (value, close) => {
      close();
      setTracking(`${value}`);
    },
    saveLabel: 'Save',
    title: 'Choose a cheese!'
  });
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Value: ", tracking), prompt, React.createElement(Button, {
    onClick: open
  }, "usePrompt"));
}
//# sourceMappingURL=UsePrompt.js.map