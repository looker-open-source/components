

import React from 'react';
import { Box } from '../../Layout';
import { ContentOverflow } from './ContentOverflow';
import { EdgeOverflow } from './EdgeOverflow';
export default function OverflowExamples() {
  return React.createElement(Box, {
    p: "u10",
    width: "100%",
    position: "relative",
    height: "100%"
  }, React.createElement(EdgeOverflow, {
    top: 0,
    left: 0
  }, "Top Left"), React.createElement(EdgeOverflow, {
    top: 0,
    right: 0
  }, "Top Right"), React.createElement(EdgeOverflow, {
    bottom: 0,
    left: 0
  }, "Bottom Left"), React.createElement(EdgeOverflow, {
    bottom: 0,
    right: 0
  }, "Bottom Right"), React.createElement(ContentOverflow, null, "Long popover content (placement ignore too)"), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."), React.createElement("p", null, "...."));
}
//# sourceMappingURL=OverflowExamples.js.map