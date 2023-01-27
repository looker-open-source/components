
import React from 'react';
import { Grid, Box } from '../../..';
export default function Columns1() {
  return React.createElement(Grid, {
    columns: 1
  }, React.createElement(Box, {
    border: true,
    minHeight: "5rem"
  }, "A"), React.createElement(Box, {
    border: true
  }, "B"), React.createElement(Box, {
    border: true
  }, "C"), React.createElement(Box, {
    border: true
  }, "D"));
}
//# sourceMappingURL=Columns1.js.map