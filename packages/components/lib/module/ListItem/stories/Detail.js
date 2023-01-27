
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { ListItem } from '..';
import { List, IconButton } from '../../';
export default function Detail() {
  return React.createElement(List, null, React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Tag, null),
    detail: "Standard Detail text"
  }, "ListItem (Standard)"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Tag, null),
    detail: React.createElement(IconButton, {
      icon: React.createElement(MaterialIcons.PivotTableChart, null),
      label: React.createElement(MaterialIcons.PivotTableChart, null),
      onClick: () => alert("You've pivoted!")
    }),
    itemRole: "none"
  }, "ListItem (Standard)"), React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.Tag, null),
    detail: {
      content: React.createElement(IconButton, {
        icon: React.createElement(MaterialIcons.PivotTableChart, null),
        label: React.createElement(MaterialIcons.PivotTableChart, null),
        onClick: () => alert("You've pivoted!")
      }),
      options: {
        accessory: true,
        hoverDisclosure: true
      }
    }
  }, "ListItem (Options Enabled)"));
}
//# sourceMappingURL=Detail.js.map