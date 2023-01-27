

import React from 'react';
import { ButtonOutline, useDialog } from '../..';
export default function UseDialog() {
  const {
    dialog,
    setOpen
  } = useDialog({
    content: 'My Neat Dialog'
  });
  return React.createElement(React.Fragment, null, dialog, React.createElement(ButtonOutline, {
    onClick: () => setOpen(true)
  }, "Open Dialog"));
}
//# sourceMappingURL=UseDialog.js.map