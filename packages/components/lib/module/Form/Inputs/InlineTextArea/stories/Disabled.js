

import React from 'react';
import { InlineTextArea } from '../';
export default function Disabled() {
  return React.createElement(InlineTextArea, {
    disabled: true,
    value: "This text can't be edited because the component is disabled..."
  });
}
//# sourceMappingURL=Disabled.js.map