

import React from 'react';
import { PopoverFooter } from '../..';
import { ButtonTransparent } from '../../../../Button/ButtonTransparent';
export default function FooterWithChildren() {
  return React.createElement(PopoverFooter, null, React.createElement(ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Cancel"));
}
//# sourceMappingURL=FooterWithChildren.js.map