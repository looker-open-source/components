
import React from 'react';
import { Drawer, ButtonOutline } from '../..';
export default function AnimationCallbacks() {
  return React.createElement(Drawer, {
    content: "My neat drawer",
    onAfterClose: () => alert(`Close`),
    onAfterOpen: () => alert(`Open`)
  }, React.createElement(ButtonOutline, null, "Open Drawer"));
}
//# sourceMappingURL=AnimationCallbacks.js.map