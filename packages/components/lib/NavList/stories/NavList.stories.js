import React, { useState } from 'react';
import { Info, Home } from '@styled-icons/material-outlined';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { IconButton } from '../../Button';
import { Aside } from '../../Layout';
import { ListItem } from '../../ListItem';
import { ProgressCircular } from '../../ProgressCircular';
import { NavTree, NavTreeItem } from '../../NavTree';
import { NavList } from '../NavList';
export default {
  argTypes,
  component: NavList,
  title: 'NavList'
};
export { LeftNav } from './LeftNav';
export const Basic = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return React.createElement(NavList, null, React.createElement(ListItem, {
    description: "Description",
    detail: "Interesting details",
    icon: React.createElement(Home, null),
    selected: true
  }, "Explore"), React.createElement(ListItem, {
    icon: React.createElement(Info, null),
    onClick: handleClick,
    selected: selected,
    truncate: {
      description: "It's an item"
    }
  }, "Develop"), React.createElement(ListItem, {
    icon: React.createElement(Info, null),
    truncate: {
      description: 'Word Document - Last update 3 days ago'
    }
  }, "This is a really long navigation list item that should get truncated at some point waaaayyyy out in the nether regions of a long line of text"));
};
export const MixedNavigation = () => React.createElement(Aside, {
  width: "navigation"
}, React.createElement(NavList, null, React.createElement(ListItem, {
  icon: React.createElement(Home, null),
  selected: true
}, "Home"), React.createElement(NavTree, {
  icon: React.createElement(Info, null),
  label: "NavTree",
  selected: true,
  defaultOpen: true
}, React.createElement(NavTree, {
  defaultOpen: true,
  label: "Blah",
  icon: React.createElement(Info, null)
}, React.createElement(NavTreeItem, {
  parentIcon: true,
  color: "text2"
}, React.createElement("em", null, "Not yet available")), React.createElement(NavTreeItem, {
  parentIcon: true,
  icon: React.createElement(ProgressCircular, {
    size: "xsmall",
    progress: 0.75
  })
}, "Loading..."))), React.createElement(NavTree, {
  icon: React.createElement(Info, null),
  label: "NavTree w icon-free NavTreeItems and long title",
  defaultOpen: true
}, React.createElement(NavTree, {
  label: "Folders",
  defaultOpen: true
}, React.createElement(NavTreeItem, {
  description: "description",
  detail: "detail",
  selected: true
}, "My Awesome Item"), React.createElement(NavTreeItem, null, "Truncate example with long text running off screen"), React.createElement(NavTreeItem, {
  description: "description",
  detail: "detail"
}, "Truncate example with long text running off screen")))));
export const KeyboardNavigation = () => {
  const getDetail = label => ({
    content: React.createElement(IconButton, {
      label: `${label}-button`,
      icon: React.createElement(Info, null),
      tooltipDisabled: true
    }),
    options: {
      hoverDisclosure: true
    }
  });

  return React.createElement(NavList, null, React.createElement(ListItem, {
    icon: React.createElement(Info, null),
    detail: getDetail('list-item-detail'),
    itemRole: "none"
  }, "List Item"), React.createElement(NavTree, {
    icon: React.createElement(Info, null),
    label: "Nav Tree Default",
    detail: getDetail('nav-tree-detail'),
    defaultOpen: true
  }, React.createElement(NavTreeItem, {
    parentIcon: true,
    detail: getDetail('nav-tree-item-detail'),
    itemRole: "none"
  }, "Nav Tree Item")), React.createElement(NavTree, {
    icon: React.createElement(Info, null),
    indicatorLabel: "Nav Tree Link Indicator",
    label: "Nav Tree Link",
    detail: getDetail('nav-tree-link-detail'),
    defaultOpen: true,
    href: "https://google.com",
    target: "_blank"
  }, React.createElement(NavTreeItem, {
    parentIcon: true,
    itemRole: "none"
  }, "Now You See Me")));
};
KeyboardNavigation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=NavList.stories.js.map