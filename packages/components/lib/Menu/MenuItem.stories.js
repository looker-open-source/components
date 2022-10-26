import React from 'react';
import { PersonOutline } from '@styled-icons/material-outlined';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { MenuItem } from './MenuItem';

const Template = args => React.createElement(MenuItem, args, "Menu Item");

export const Basic = Template.bind({});
export const Icon = Template.bind({});
Icon.args = {
  icon: React.createElement(PersonOutline, null)
};
export const Detail = Template.bind({});
Detail.args = {
  detail: 'A Detail'
};
export const IconAndDetail = Template.bind({});
IconAndDetail.args = {
  detail: 'A Detail',
  icon: React.createElement(PersonOutline, null)
};
export const Description = Template.bind({});
Description.args = {
  description: 'A description'
};
export const IconAndDescription = Template.bind({});
IconAndDescription.args = {
  description: 'A description',
  icon: React.createElement(PersonOutline, null)
};
export const DetailAndDescription = Template.bind({});
DetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail'
};
export const IconAndDetailAndDescription = Template.bind({});
IconAndDetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail',
  icon: React.createElement(PersonOutline, null)
};
export const Selected = Template.bind({});
Selected.args = {
  selected: true
};
export const Link = () => {
  return React.createElement(MenuItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "MenuItem that links to Google");
};
export default {
  argTypes,
  component: MenuItem,
  title: 'MenuItem'
};
//# sourceMappingURL=MenuItem.stories.js.map