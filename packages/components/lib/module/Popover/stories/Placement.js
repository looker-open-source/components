
import { Paragraph, Box, Heading, Button } from '@looker/components';
import React from 'react';
import { Popover, PopoverContent } from '..';
export default function Placement() {
  const popoverContent = React.createElement(PopoverContent, null, React.createElement(Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));
  return React.createElement(Box, {
    mt: "large"
  }, React.createElement(Heading, null, "Placement"), React.createElement(Box, {
    my: "medium"
  }, React.createElement(Popover, {
    content: popoverContent
  }, React.createElement(Button, null, "Default")), React.createElement(Popover, {
    content: popoverContent
  }, React.createElement(Button, null, "Default"))));
}
//# sourceMappingURL=Placement.js.map