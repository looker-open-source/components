
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { List } from '../..';
import { ListItem } from '..';
export default function Icon() {
  return React.createElement(List, null, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.PersonOutline, null)
  }, "List Item"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.PersonOutline, null),
    color: "calculation"
  }, "List Item"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.PersonOutline, null),
    color: "key"
  }, "List Item"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.PersonOutline, null),
    color: "#cc00cc"
  }, "List Item"));
}
//# sourceMappingURL=Color.js.map