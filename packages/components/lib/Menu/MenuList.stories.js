import { Create, DateRange, Undo } from '@styled-icons/material-outlined';
import React, { Fragment } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Box2, Grid, Space } from '../Layout';
import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuHeading } from './MenuHeading';
const groups = [{
  items: [{
    children: 'Edit Dashboard',
    detail: 'cmd+shift+E',
    icon: React.createElement(Create, null)
  }, {
    children: 'Get LookML',
    description: 'some description'
  }, {
    children: 'Revert to original dashboard',
    detail: 'A longer detail',
    icon: React.createElement(Undo, null)
  }],
  label: 'Options'
}, {
  items: [{
    children: 'Log Out',
    detail: 'esc'
  }]
}];

const Template = args => React.createElement(MenuList, args);

export const Basic = Template.bind({});
Basic.args = {
  children: groups.map(({
    label,
    items
  }, key) => React.createElement(Fragment, {
    key: key
  }, label && React.createElement(MenuHeading, null, label), items.map((item, i) => React.createElement(MenuItem, {
    key: i,
    icon: item.icon,
    detail: item.detail,
    description: item.description
  }, item.children)), React.createElement(MenuDivider, null))),
  iconGutter: true
};
const array3000 = Array.from(Array(3000), (_, i) => String(i + 1));
export const LongList = () => {
  return React.createElement(Box2, {
    height: "500px"
  }, React.createElement(MenuList, null, array3000.map((item, i) => React.createElement(MenuItem, {
    key: i
  }, item))));
};
LongList.parameters = {
  storyshots: false
};
export const MenuHeadingComposition = () => React.createElement(MenuList, null, React.createElement(MenuHeading, null, "Mild Cheeses"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuDivider, null), React.createElement(MenuHeading, null, "Spicy Cheeses"), React.createElement(MenuItem, null, "Pepper Jack"));

const DensityExample = ({
  density
}) => React.createElement(MenuList, {
  iconGutter: true,
  density: density
}, React.createElement(MenuHeading, null, "Cheeses of the World"), React.createElement(MenuItem, {
  icon: React.createElement(DateRange, null),
  description: "Yellow"
}, "Swiss"), React.createElement(MenuItem, {
  selected: true
}, "Parmesan"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuDivider, null), React.createElement(MenuItem, null, "Pepper Jack"));

export const Density = () => React.createElement(Grid, {
  columns: 5
}, React.createElement(DensityExample, {
  density: 1
}), React.createElement(DensityExample, null), React.createElement(DensityExample, {
  density: -1
}), React.createElement(DensityExample, {
  density: -2
}), React.createElement(DensityExample, {
  density: -3
}));
export const MenuHeadingOverride = () => React.createElement(MenuList, null, React.createElement(MenuHeading, null, "Hello World"), React.createElement(MenuHeading, {
  color: "inform",
  fontSize: "small",
  fontWeight: "bold",
  lineHeight: "small",
  py: "xxsmall"
}, "Custom Hello World"));
export const MenuListSpacing = () => React.createElement(Space, {
  p: "u4",
  style: {
    background: '#ff8c69'
  }
}, React.createElement(Box2, {
  bg: "background"
}, React.createElement(MenuList, null, React.createElement(MenuDivider, null), React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"), React.createElement(MenuDivider, null))), React.createElement(Box2, {
  bg: "background"
}, React.createElement(MenuList, null, React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"), React.createElement(MenuDivider, null))), React.createElement(Box2, {
  bg: "background"
}, React.createElement(MenuList, null, React.createElement(MenuDivider, null), React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuItem, {
  selected: true
}, "Top Item"), React.createElement(MenuDivider, null), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"), React.createElement(MenuItem, {
  selected: true
}, "Bottom Item"))));
export const AdjacentDividers = () => React.createElement(MenuList, null, React.createElement(MenuItem, null, "There should only be one divider here..."), React.createElement(MenuDivider, null), React.createElement(MenuDivider, null), React.createElement(MenuItem, null, "even though there are technically two"));
export default {
  argTypes,
  component: MenuList,
  title: 'MenuList'
};
//# sourceMappingURL=MenuList.stories.js.map