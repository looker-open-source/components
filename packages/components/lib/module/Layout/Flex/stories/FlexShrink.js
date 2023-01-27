
import React from 'react';
import { Flex, FlexItem, Box } from '../../..';
export default function FlexShrink() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    width: "500px"
  }, React.createElement(FlexItem, {
    flex: "1 0 200px"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui4"
  }, "No Shrink")), React.createElement(FlexItem, {
    flex: "1 1 200px"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui3"
  }, "I'll shrink")), React.createElement(FlexItem, {
    flex: "1 1 200px"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui2"
  }, "I'll shrink"))));
}
//# sourceMappingURL=FlexShrink.js.map