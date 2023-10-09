import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Accordion } from '../..';
export default function IndicatorIcons() {
  return React.createElement(Accordion, {
    content: "Hello",
    indicatorIcons: {
      close: React.createElement(MaterialIcons.ChevronLeft, null),
      open: React.createElement(MaterialIcons.ExpandMore, null)
    }
  }, "World");
}
//# sourceMappingURL=IndicatorIcons.js.map