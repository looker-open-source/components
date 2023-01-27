
import { Button } from '@looker/components';
import React from 'react';
import { Popover, PopoverContent } from '..';
export default function Basic() {
  return React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, "Some content")
  }, React.createElement(Button, null, "Open"));
}
//# sourceMappingURL=Basic.js.map