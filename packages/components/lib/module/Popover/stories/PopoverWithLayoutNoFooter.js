
import { Button } from '@looker/components';
import React from 'react';
import { Popover, PopoverLayout } from '..';
export default function PopoverWithLayoutNoFooter() {
  return React.createElement(Popover, {
    width: 640,
    content: React.createElement(PopoverLayout, {
      header: "Header text",
      footer: false
    }, "We the People of the United States")
  }, React.createElement(Button, null, "Open"));
}
//# sourceMappingURL=PopoverWithLayoutNoFooter.js.map