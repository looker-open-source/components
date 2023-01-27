
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { List } from '../';
import { ListItem } from '../../';
export default function FontFamily() {
  return React.createElement(List, {
    iconGutter: true
  }, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DateRange, null)
  }, "Item 1"), React.createElement(ListItem, null, "Item 2"), React.createElement(ListItem, null, "Item 3"));
}
//# sourceMappingURL=IconGutter.js.map