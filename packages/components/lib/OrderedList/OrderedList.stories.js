import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { OrderedList } from './OrderedList';
export default {
  argTypes,
  component: OrderedList,
  title: 'OrderedList'
};

const Template = args => React.createElement(OrderedList, args, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack"));

export const Basic = Template.bind({});
export const Number = Template.bind({});
Number.args = {
  type: 'number'
};
export const Letter = Template.bind({});
Letter.args = {
  type: 'letter'
};
//# sourceMappingURL=OrderedList.stories.js.map