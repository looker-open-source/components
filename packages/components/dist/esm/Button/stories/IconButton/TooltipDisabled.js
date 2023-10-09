import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function TooltipDisabled() {
  return React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add",
    tooltipDisabled: true
  });
}
//# sourceMappingURL=TooltipDisabled.js.map