import React from 'react';
import { Box2 } from '../../Layout';
import { ContentOverflow } from './ContentOverflow';
import { EdgeOverflow } from './EdgeOverflow';
export const OverflowExamples = () => {
  return React.createElement(Box2, {
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
};
OverflowExamples.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=OverflowExamples.js.map