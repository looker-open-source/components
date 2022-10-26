import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Accordion2 } from '../..';
export default function IndicatorIcons() {
  return React.createElement(Accordion2, {
    label: "Hello",
    indicatorIcons: {
      close: React.createElement(MaterialIcons.ChevronLeft, null),
      open: React.createElement(MaterialIcons.ExpandMore, null)
    }
  }, "World");
}
//# sourceMappingURL=CustomizedIndicator.js.map