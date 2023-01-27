

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavList, ListItem, NavTree, NavTreeItem, IconButton } from '../..';
export default function KeyboardNavigation() {
  const getDetail = label => ({
    content: React.createElement(IconButton, {
      label: `${label}-button`,
      icon: React.createElement(MaterialIcons.Info, null),
      tooltipDisabled: true
    }),
    options: {
      hoverDisclosure: true
    }
  });
  return React.createElement(NavList, null, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Info, null),
    detail: getDetail('list-item-detail'),
    itemRole: "none"
  }, "List Item"), React.createElement(NavTree, {
    icon: React.createElement(MaterialIcons.Info, null),
    label: "Nav Tree Default",
    detail: getDetail('nav-tree-detail'),
    defaultOpen: true
  }, React.createElement(NavTreeItem, {
    parentIcon: true,
    detail: getDetail('nav-tree-item-detail'),
    itemRole: "none"
  }, "Nav Tree Item")), React.createElement(NavTree, {
    icon: React.createElement(MaterialIcons.Info, null),
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
}
//# sourceMappingURL=KeyboardNavigation.js.map