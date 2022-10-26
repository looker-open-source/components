import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Density } from './Density';
export default {
  argTypes,
  component: Density,
  title: 'Density'
};

const Template = args => React.createElement(Density, args, React.createElement(List, null, React.createElement(ListItem, null, "Cheddar"), React.createElement(ListItem, null, "Gouda"), React.createElement(ListItem, null, "Swiss")));

export const Plus1 = Template.bind({});
Plus1.args = {
  scale: 1
};
export const Basic = Template.bind({});
Basic.args = {
  scale: 0
};
export const Minus1 = Template.bind({});
Minus1.args = {
  scale: -1
};
export const Minus2 = Template.bind({});
Minus2.args = {
  scale: -2
};
export const Minus3 = Template.bind({});
Minus3.args = {
  scale: -3
};
//# sourceMappingURL=Density.stories.js.map