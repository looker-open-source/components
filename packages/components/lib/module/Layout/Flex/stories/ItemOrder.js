
import React from 'react';
import { Flex, FlexItem, Box } from '../../..';
export default function ItemOrder() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    bg: "ui1",
    mb: "u5"
  }, React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui2"
  }, "0")), React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "1")), React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui3"
  }, "2")), React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui5",
    color: "inverseOn"
  }, "3")), React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui4"
  }, "4"))), React.createElement(Flex, {
    bg: "ui1"
  }, React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui2"
  }, "0")), React.createElement(FlexItem, {
    order: "2"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "1")), React.createElement(FlexItem, {
    order: "1"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui3"
  }, "2")), React.createElement(FlexItem, null, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui5",
    color: "inverseOn"
  }, "3")), React.createElement(FlexItem, {
    order: "-1"
  }, React.createElement(Box, {
    m: "u3",
    p: "u5",
    bg: "ui4"
  }, "4"))));
}
//# sourceMappingURL=ItemOrder.js.map