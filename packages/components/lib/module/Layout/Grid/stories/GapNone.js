
import React from 'react';
import { Grid, Box } from '../../..';
export default function GapNone() {
  return React.createElement(Grid, {
    gap: "none"
  }, React.createElement(Box, {
    border: true,
    minHeight: "5rem"
  }, "A"), React.createElement(Box, {
    border: true
  }, "B"));
}
//# sourceMappingURL=GapNone.js.map