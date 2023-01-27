

import React, { useState } from 'react';
import { Dialog, DialogLayout } from '../../Dialog';
import { Button, ButtonTransparent } from '../../Button';
export default function ControlledLegacy() {
  const [isOpen, setIsOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: () => setIsOpen(false),
    content: React.createElement(DialogLayout, {
      header: "Simple header",
      footer: React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: () => setIsOpen(false)
      }, "Done Reading"), React.createElement(ButtonTransparent, {
        color: "neutral",
        onClick: () => setIsOpen(false)
      }, "Finish Later"))
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  }), React.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Open Dialog"));
}
//# sourceMappingURL=ControlledLegacy.js.map