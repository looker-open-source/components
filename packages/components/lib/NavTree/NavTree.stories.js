import React from 'react';
import { Folder } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { NavList } from '../NavList';
import { NavTree } from './NavTree';
import { NavTreeItem } from './NavTreeItem';
export default {
  argTypes,
  component: NavTree,
  title: 'NavTree'
};

const Template = args => React.createElement(NavList, null, React.createElement(NavTree, args, React.createElement(NavTreeItem, {
  parentIcon: true
}, "Cheddar")));

export const Basic = Template.bind({});
Basic.args = {
  defaultOpen: true,
  icon: React.createElement(Folder, null),
  label: 'Cheeses'
};
export const Link = () => React.createElement(NavList, null, React.createElement(NavTree, {
  defaultOpen: true,
  label: "Click me to go to Google",
  icon: React.createElement(Folder, null),
  href: "https://google.com",
  target: "_blank",
  indicatorLabel: "Google Link Indicator"
}, React.createElement(NavTreeItem, {
  href: "https://google.com",
  target: "_blank",
  parentIcon: true
}, "Some Item")));
export const ParentIcon = () => {
  return React.createElement(NavList, null, React.createElement(NavTree, {
    defaultOpen: true,
    label: "Parent Tree with Icon",
    icon: React.createElement(Folder, null)
  }, React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar"), React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar 2"), React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar 3")), React.createElement(NavTree, {
    defaultOpen: true,
    label: "Grandparent Tree with Icon",
    icon: React.createElement(Folder, null)
  }, React.createElement(NavTree, {
    defaultOpen: true,
    label: "Parent Tree with No Icon"
  }, React.createElement(NavTreeItem, null, "Swiss"), React.createElement(NavTreeItem, null, "Swiss 2"), React.createElement(NavTreeItem, null, "Swiss 3"))));
};
//# sourceMappingURL=NavTree.stories.js.map