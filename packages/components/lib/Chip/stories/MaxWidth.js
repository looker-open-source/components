import React from 'react';
import { Chip, Space } from '../..';
export default function MaxWidth() {
  return React.createElement(Space, {
    gap: "u1"
  }, React.createElement(Chip, {
    maxWidth: 150
  }, "short"), React.createElement(Chip, {
    maxWidth: 150
  }, "Very long text inside the chip will be truncated"));
}
//# sourceMappingURL=MaxWidth.js.map