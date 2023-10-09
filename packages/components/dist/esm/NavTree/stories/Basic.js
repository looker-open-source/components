function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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