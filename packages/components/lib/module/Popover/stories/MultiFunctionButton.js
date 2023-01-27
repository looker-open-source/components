
import { Button, CopyToClipboard } from '@looker/components';
import React from 'react';
import { Popover, PopoverContent } from '..';
export default function MultiFunctionButton() {
  return React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, React.createElement(CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, React.createElement(Button, null, "Copy")))
  }, React.createElement(Button, null, "Open Popover"));
}
//# sourceMappingURL=MultiFunctionButton.js.map