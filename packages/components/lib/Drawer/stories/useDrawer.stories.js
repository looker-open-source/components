import React, { useState } from 'react';
import { DialogLongContent } from '../../fixtures/DialogLongContent';
import { useDrawer } from '../useDrawer';
export const UseDrawerHook = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);

  const content = React.createElement(DialogLongContent, null);
  const {
    dialog
  } = useDrawer({
    content,
    isOpen,
    setOpen
  });
  return React.createElement(React.Fragment, null, dialog, React.createElement("button", {
    onClick: open
  }, "Open Drawer"));
};
UseDrawerHook.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=useDrawer.stories.js.map