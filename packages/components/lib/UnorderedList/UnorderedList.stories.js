import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { UnorderedList } from './UnorderedList';
export default {
  argTypes,
  component: UnorderedList,
  title: 'UnorderedList'
};

const Template = args => React.createElement(UnorderedList, args, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack"));

export const Basic = Template.bind({});
export const Bullet = Template.bind({});
Bullet.args = {
  type: 'bullet'
};
export const Color = Template.bind({});
Color.args = {
  color: 'key'
};
//# sourceMappingURL=UnorderedList.stories.js.map