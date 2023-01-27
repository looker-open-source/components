

import React from 'react';
import { Menu, MenuItem, Button, Dialog, DialogLayout } from '../..';
import { useToggle } from '../../utils';
export default function WithDialog() {
  const {
    value,
    setOn,
    setOff
  } = useToggle();
  const handleClick = e => {
    e.preventDefault();
    setOn();
  };
  return React.createElement(React.Fragment, null, React.createElement(Menu, {
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
      onClick: setOn
    }, "Open Dialog"), React.createElement(MenuItem, {
      onClick: handleClick
    }, "Open Dialog, keep Menu open"))
  }, React.createElement(Button, null, "Menu with Dialog")), React.createElement(Dialog, {
    isOpen: value,
    onClose: setOff
  }, React.createElement(DialogLayout, {
    footer: React.createElement(Button, {
      onClick: setOff
    }, "Close"),
    header: "A Dialog"
  }, "Dialog must be placed outside of Menu")));
}
//# sourceMappingURL=WithDialog.js.map