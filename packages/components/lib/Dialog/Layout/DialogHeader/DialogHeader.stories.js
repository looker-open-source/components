import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { DialogHeader } from './DialogHeader';
export default {
  argTypes,
  component: DialogHeader,
  title: 'DialogHeader'
};
export const Basic = () => React.createElement(DialogHeader, null, "Heading");
export const HideClose = () => React.createElement(DialogHeader, {
  hideClose: true
}, "Heading");
export const Detail = () => React.createElement(DialogHeader, {
  detail: "Detail text"
}, "Heading");
Detail.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=DialogHeader.stories.js.map