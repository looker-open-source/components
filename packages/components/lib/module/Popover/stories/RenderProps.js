
import { Paragraph } from '@looker/components';
import React from 'react';
import { Popover, PopoverContent } from '..';
export default function RenderProps() {
  const popoverContent = React.createElement(PopoverContent, null, React.createElement(Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));
  return React.createElement(Popover, {
    content: popoverContent
  }, props => React.createElement("button", props, "Test"));
}
//# sourceMappingURL=RenderProps.js.map