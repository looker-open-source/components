

import React from 'react';
import { Box, DialogLayout, DialogContent } from '../../..';
export default function NoPadding() {
  return React.createElement(Box, {
    bg: "ui1"
  }, React.createElement(DialogLayout, null, React.createElement(DialogContent, {
    hasFooter: false,
    hasHeader: false
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")));
}
//# sourceMappingURL=NoPadding.js.map