import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function Square() {
  return React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add",
    shape: "square"
  });
}
//# sourceMappingURL=Square.js.map