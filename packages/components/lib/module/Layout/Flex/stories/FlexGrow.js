
import React from 'react';
import { Flex, FlexItem, Box } from '../../..';
export default function FlexGrow() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, null, React.createElement(FlexItem, {
    flex: "2"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui4"
  }, "Flex: 2")), React.createElement(FlexItem, {
    flex: "1"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui3"
  }, "Flex: 1")), React.createElement(FlexItem, {
    flex: "1"
  }, React.createElement(Box, {
    p: "u3",
    bg: "ui2"
  }, "Flex: 1"))));
}
//# sourceMappingURL=FlexGrow.js.map