
import React from 'react';
import { Grid, Box } from '../../..';
export default function Columns4() {
  return React.createElement(Grid, {
    columns: 4
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
//# sourceMappingURL=Columns4.js.map