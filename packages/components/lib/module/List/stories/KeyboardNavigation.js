
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton, ListItem } from '../../';
import { List } from '../';
export default function KeyboardNavigation() {
  return React.createElement(List, null, React.createElement(ListItem, {
    itemRole: "none",
    detail: {
      content: React.createElement(IconButton, {
        label: "cheddar-button",
        icon: React.createElement(MaterialIcons.DateRange, null),
        tooltipDisabled: true
      }),
      options: {
        hoverDisclosure: true
      }
    }
  }, "Cheddar"), React.createElement(ListItem, {
    itemRole: "none",
    detail: React.createElement(IconButton, {
      label: "gouda-button",
      icon: React.createElement(MaterialIcons.DateRange, null),
      tooltipDisabled: true
    })
  }, "Gouda"));
}
//# sourceMappingURL=KeyboardNavigation.js.map