
import React from 'react';
import { ButtonOutline, useDrawer } from '../..';
export default function UseDrawer() {
  const {
    dialog,
    setOpen
  } = useDrawer({
    content: 'Drawer content'
  });
  return React.createElement(React.Fragment, null, dialog, React.createElement(ButtonOutline, {
    onClick: () => setOpen(true)
  }, "Open Drawer"));
}
//# sourceMappingURL=UseDrawer.js.map