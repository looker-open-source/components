
import React from 'react';
import { Flex, FlexItem, Box } from '../../..';
export default function FlexBasis() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, null, React.createElement(FlexItem, {
    flexBasis: "20%"
  }, React.createElement(Box, {
    p: "u3",
    m: "u3",
    bg: "ui4"
  }, "I am 20% of container")), React.createElement(FlexItem, {
    flexBasis: "5.5rem"
  }, React.createElement(Box, {
    p: "u3",
    m: "u3",
    bg: "ui3"
  }, "I am 5.5rem of container")), React.createElement(FlexItem, {
    flexBasis: "150px"
  }, React.createElement(Box, {
    p: "u3",
    m: "u3",
    bg: "ui2"
  }, "I am 150px of container")), React.createElement(FlexItem, null, React.createElement(Box, {
    p: "u3",
    m: "u3",
    bg: "ui1"
  }, "I am sized to my content"))));
}
//# sourceMappingURL=FlexBasis.js.map