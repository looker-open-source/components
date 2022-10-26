import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { MultiFunctionButton, Button, ButtonTransparent } from '../..';
export default function CopyToClipboard() {
  const [change, setChange] = useState(false);

  const handleSwap = () => {
    setChange(true);
    setTimeout(() => setChange(false), 2500);
  };

  const alternateCopyButton = React.createElement(ButtonTransparent, {
    iconBefore: React.createElement(MaterialIcons.Check, null),
    size: "large",
    width: 300
  }, "Copied!");
  return React.createElement(MultiFunctionButton, {
    alternate: alternateCopyButton,
    swap: change
  }, React.createElement(Button, {
    onClick: handleSwap
  }, "Copy to Clipboard"));
}
//# sourceMappingURL=CopyToClipboard.js.map