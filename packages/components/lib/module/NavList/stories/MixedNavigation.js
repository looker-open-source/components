

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavList, ListItem, Aside, NavTree, NavTreeItem, ProgressCircular } from '../..';
export default function MixedNavigation() {
  return React.createElement(Aside, {
    width: "navigation"
  }, React.createElement(NavList, null, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Home, null),
    selected: true
  }, "Home"), React.createElement(NavTree, {
    icon: React.createElement(MaterialIcons.Info, null),
    label: "NavTree",
    selected: true,
    defaultOpen: true
  }, React.createElement(NavTree, {
    defaultOpen: true,
    label: "Blah",
    icon: React.createElement(MaterialIcons.Info, null)
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
    icon: React.createElement(MaterialIcons.Info, null),
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
}
//# sourceMappingURL=MixedNavigation.js.map