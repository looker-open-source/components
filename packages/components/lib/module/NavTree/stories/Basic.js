import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { NavTree, NavTreeItem } from '../..';
export default function Basic(props) {
  return React.createElement(NavTree, _extends({}, props, {
    defaultOpen: true,
    icon: React.createElement(MaterialIcons.Folder, null),
    label: "Cheeses"
  }), React.createElement(NavTreeItem, null, "Cheddar"));
}
//# sourceMappingURL=Basic.js.map