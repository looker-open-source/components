import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { PopoverHeader } from './PopoverHeader';
export default {
  argTypes,
  component: PopoverHeader,
  title: 'PopoverHeader'
};
export const Basic = () => React.createElement(PopoverHeader, null, "Header Text");
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Hidden = () => React.createElement(PopoverHeader, {
  hidden: true
}, "Header Text");
Hidden.parameters = {
  storyshots: {
    disable: true
  }
};
export const HideClose = () => React.createElement(PopoverHeader, {
  hideClose: true
}, "Header Text");
HideClose.parameters = {
  storyshots: {
    disable: true
  }
};
export const Detail = () => React.createElement(PopoverHeader, {
  detail: React.createElement("button", null, "close")
}, "Header Text");
Detail.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=PopoverHeader.stories.js.map