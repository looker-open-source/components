

import React from 'react';
import { Dialog, ButtonOutline } from '../..';
export default function AnimationCallbacks() {
  return React.createElement(Dialog, {
    content: "Simple Content",
    onAfterClose: () => {
      alert('Close');
    },
    onAfterOpen: () => {
      alert('Open');
    }
  }, React.createElement(ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=AnimationCallbacks.js.map