

import React from 'react';
import { ButtonTransparent } from '@looker/components';
import { PopoverLayout } from '../..';
export default function Full() {
  return React.createElement(PopoverLayout, {
    footer: React.createElement(ButtonTransparent, {
      color: "neutral",
      size: "small"
    }, "Cancel"),
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=Full.js.map