
import React from 'react';
import { Space, Box } from '../../..';
export default function Basic() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Box, {
    bg: "white",
    p: "u8"
  }, "On White"), React.createElement(Box, {
    bg: "ui1",
    p: "u8"
  }, "On `ui1`"), React.createElement(Box, {
    bg: "ui2",
    p: "u8"
  }, "On `ui2`"));
}
//# sourceMappingURL=Basic.js.map