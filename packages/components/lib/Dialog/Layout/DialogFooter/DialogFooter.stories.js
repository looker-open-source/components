import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { DialogFooter } from './DialogFooter';
export default {
  argTypes,
  component: DialogFooter,
  title: 'DialogFooter'
};
export const Basic = () => React.createElement(DialogFooter, null, "Footer Text");
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Secondary = () => React.createElement(DialogFooter, {
  secondary: React.createElement("button", null, "Done")
}, "Footer Text");
Secondary.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=DialogFooter.stories.js.map