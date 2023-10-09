import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function ToggleOn() {
  return React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add",
    toggle: true
  });
}
//# sourceMappingURL=ToggleOn.js.map