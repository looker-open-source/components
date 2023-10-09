import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function Round() {
  return React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add",
    shape: "round"
  });
}
//# sourceMappingURL=Round.js.map