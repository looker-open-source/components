import React, { useState } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Accordion, Space, Icon, Paragraph } from '../..';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
export default function Controlled() {
  const [isOpen, setIsOpen] = useState(true);
  return React.createElement(Accordion, {
    indicatorPosition: "left",
    isOpen: isOpen,
    toggleOpen: setIsOpen,
    onOpen: () => alert('Opening doors'),
    onClose: () => alert('Closing doors'),
    content: React.createElement(Paragraph, null, lorem)
  }, React.createElement(Space, {
    between: true
  }, "Some Information", React.createElement(Icon, {
    color: "text2",
    icon: React.createElement(MaterialIcons.Info, null),
    size: "small"
  })));
}
//# sourceMappingURL=Controlled.js.map