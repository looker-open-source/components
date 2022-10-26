import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton, Tooltip } from '../../..';
export default function TooltipExample() {
  return React.createElement(Tooltip, {
    content: "A more descriptive tooltip"
  }, React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add"
  }));
}
//# sourceMappingURL=Tooltip.js.map