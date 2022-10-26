import React from 'react';
import { Accordion2 } from '../..';
export default function DefaultOpen() {
  return React.createElement(Accordion2, {
    defaultOpen: true,
    onClose: () => alert('Closing doors'),
    onOpen: () => alert('Opening doors'),
    label: "Show me some other cheese!"
  }, "Swiss");
}
//# sourceMappingURL=DefaultOpen.js.map