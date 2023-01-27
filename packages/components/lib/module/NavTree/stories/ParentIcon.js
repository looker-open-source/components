

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavTree, NavTreeItem } from '../..';
export default function ParentIcon() {
  return React.createElement(React.Fragment, null, React.createElement(NavTree, {
    defaultOpen: true,
    label: "Parent Tree with Icon",
    icon: React.createElement(MaterialIcons.Folder, null)
  }, React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar"), React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar 2"), React.createElement(NavTreeItem, {
    parentIcon: true
  }, "Cheddar 3")), React.createElement(NavTree, {
    defaultOpen: true,
    label: "Grandparent Tree with Icon",
    icon: React.createElement(MaterialIcons.Folder, null)
  }, React.createElement(NavTree, {
    defaultOpen: true,
    label: "Parent Tree with No Icon"
  }, React.createElement(NavTreeItem, null, "Swiss"), React.createElement(NavTreeItem, null, "Swiss 2"), React.createElement(NavTreeItem, null, "Swiss 3"))));
}
//# sourceMappingURL=ParentIcon.js.map