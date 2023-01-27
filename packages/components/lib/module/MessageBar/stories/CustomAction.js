

import React from 'react';
import { MessageBar } from '../..';
export default function CustomAction() {
  return React.createElement(MessageBar, {
    primaryAction: "Primary Action",
    onPrimaryClick: () => alert('Primary Action'),
    secondaryAction: "Secondary Action",
    onSecondaryClick: () => alert('Secondary Action')
  }, "Render some custom action labels and actions!");
}
//# sourceMappingURL=CustomAction.js.map