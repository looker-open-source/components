import React from 'react';
import { ChipButton, Space } from '../..';
export default function MaxWidth() {
  return React.createElement(Space, {
    gap: "u1"
  }, React.createElement(ChipButton, {
    maxWidth: 150
  }, "short"), React.createElement(ChipButton, {
    maxWidth: 150
  }, "Very long text inside the chip will be truncated"));
}
//# sourceMappingURL=MaxWidth.js.map