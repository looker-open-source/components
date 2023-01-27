

import React from 'react';
import { InlineTextArea } from '../';
export default function Disabled() {
  return React.createElement(InlineTextArea, {
    readOnly: true,
    value: "READ ONLY..."
  });
}
//# sourceMappingURL=ReadOnly.js.map