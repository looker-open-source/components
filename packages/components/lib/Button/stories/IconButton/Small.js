import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../..';
export default function Small() {
  return React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.Add, null),
    label: "Add",
    size: "small"
  });
}
//# sourceMappingURL=Small.js.map