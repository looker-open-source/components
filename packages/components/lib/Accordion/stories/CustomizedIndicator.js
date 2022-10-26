import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Accordion } from '../..';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
export default function CustomizedIndicator() {
  return React.createElement(Accordion, {
    density: 1,
    indicatorIcons: {
      close: React.createElement(MaterialIcons.ChevronLeft, null),
      open: React.createElement(MaterialIcons.ExpandMore, null)
    },
    content: lorem
  }, "See more...");
}
//# sourceMappingURL=CustomizedIndicator.js.map