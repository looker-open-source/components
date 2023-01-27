
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { ListItem } from '..';
export default function ClickEvent() {
  return React.createElement(ListItem, {
    icon: React.createElement(MaterialIcons.DateRange, null),
    description: "An Island",
    detail: "England",
    onClick: () => alert('Get that Cheddar')
  }, "Cheddar");
}
//# sourceMappingURL=ClickEvent.js.map