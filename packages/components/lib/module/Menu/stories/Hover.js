
import React, { useRef } from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Card, Flex, Paragraph, IconButton } from '../..';
export default function Hover() {
  const hoverRef = useRef(null);
  return React.createElement(Card, {
    ref: hoverRef,
    p: "u5"
  }, React.createElement(Flex, {
    justifyContent: "space-between"
  }, React.createElement(Paragraph, null, "Hovering in this card will show the menu button."), React.createElement(Menu, {
    hoverDisclosureRef: hoverRef,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, null, "Edit item"), React.createElement(MenuItem, null, "Create new sub-item"))
  }, React.createElement(IconButton, {
    icon: React.createElement(MaterialIcons.MoreVert, null),
    label: "More Options"
  }))));
}
//# sourceMappingURL=Hover.js.map