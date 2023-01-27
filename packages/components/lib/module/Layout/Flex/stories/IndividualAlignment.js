
import React from 'react';
import { Flex, FlexItem, Box } from '../../..';
export default function IndividualAlignment() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    height: "200px",
    bg: "key"
  }, React.createElement(FlexItem, {
    alignSelf: "flex-start"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Flex Start")), React.createElement(FlexItem, {
    alignSelf: "flex-end"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Flex End")), React.createElement(FlexItem, {
    alignSelf: "center"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Center")), React.createElement(FlexItem, {
    alignSelf: "baseline"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Baseline"))));
}
//# sourceMappingURL=IndividualAlignment.js.map