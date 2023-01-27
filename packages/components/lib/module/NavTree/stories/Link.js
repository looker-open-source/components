

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavTree, NavTreeItem } from '../..';
export default function Link() {
  return React.createElement(NavTree, {
    defaultOpen: true,
    label: "Click me to go to Google",
    icon: React.createElement(MaterialIcons.Folder, null),
    href: "https://google.com",
    target: "_blank",
    indicatorLabel: "Google Link Indicator"
  }, React.createElement(NavTreeItem, {
    href: "https://google.com",
    target: "_blank",
    parentIcon: true
  }, "Some Item"), ' ');
}
//# sourceMappingURL=Link.js.map