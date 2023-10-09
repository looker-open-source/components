import React from 'react';
import { Divider, Space, Box } from '../../..';
export default function Basic() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Box, {
    bg: "white",
    p: "u8"
  }, "On White", React.createElement(Divider, {
    mt: "u4"
  })), React.createElement(Box, {
    bg: "ui1",
    p: "u8"
  }, "On `ui1`", React.createElement(Divider, {
    mt: "u4"
  })), React.createElement(Box, {
    bg: "ui2",
    p: "u8"
  }, "On `ui2`", React.createElement(Divider, {
    mt: "u4"
  })));
}
//# sourceMappingURL=Basic.js.map