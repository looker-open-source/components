

import React from 'react';
import { ButtonTransparent } from '@looker/components';
import { PopoverLayout } from '../..';
export default function FooterCloseButton() {
  return React.createElement(PopoverLayout, {
    closeButton: React.createElement(ButtonTransparent, {
      color: "neutral",
      size: "small"
    }, "Close"),
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=FooterCloseButton.js.map