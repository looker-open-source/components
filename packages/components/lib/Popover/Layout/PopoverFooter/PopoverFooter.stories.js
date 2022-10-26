import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ButtonTransparent } from '../../../Button/ButtonTransparent';
import { PopoverFooter } from './PopoverFooter';
export default {
  argTypes,
  component: PopoverFooter,
  title: 'PopoverFooter'
};
export const Basic = () => React.createElement(PopoverFooter, null);
export const FooterWithChildren = () => React.createElement(PopoverFooter, null, React.createElement(ButtonTransparent, {
  color: "neutral",
  size: "small"
}, "Cancel"));
export const FooterClose = () => React.createElement(PopoverFooter, {
  closeButton: "Close"
});
FooterClose.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=PopoverFooter.stories.js.map