

import React from 'react';
import { Accordion2 } from '../../../Accordion2';
import { DialogLayout } from '../DialogLayout';
export default function WithAccordion() {
  return React.createElement(DialogLayout, {
    header: "Error details",
    footer: "Just text"
  }, React.createElement(Accordion2, {
    label: "Show me the cheese!"
  }, "Cheddar"));
}
//# sourceMappingURL=WithAccordion.js.map