
import { Button, Card, CardContent, Space, Paragraph } from '@looker/components';
import React from 'react';
import { Popover, PopoverLayout } from '..';
export default function Hover() {
  const hoverRef = React.useRef(null);
  const content = React.createElement(PopoverLayout, null, "I'm in the popover");
  return React.createElement(Card, {
    ref: hoverRef,
    raised: true
  }, React.createElement(CardContent, null, React.createElement(Space, {
    between: true
  }, React.createElement(Paragraph, null, "Hovering in this card will show the button that triggers the popover."), React.createElement(Popover, {
    content: content,
    hoverDisclosureRef: hoverRef
  }, React.createElement(Button, null)))));
}
//# sourceMappingURL=Hover.js.map