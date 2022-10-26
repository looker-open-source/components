import React from 'react';
import { DialogLongContent } from '../../fixtures/DialogLongContent';
import { Drawer } from '../Drawer';
export const RenderProps = () => React.createElement(Drawer, {
  content: React.createElement(DialogLongContent, null)
}, drawerProps => React.createElement("button", drawerProps, "Open Drawer"));
RenderProps.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=renderProps.stories.js.map