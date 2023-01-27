
import React from 'react';
import { Grid, Box } from '../../..';
export default function Basic() {
  return React.createElement(Grid, null, React.createElement(Box, {
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
//# sourceMappingURL=Basic.js.map