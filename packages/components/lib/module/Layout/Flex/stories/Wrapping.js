
import React from 'react';
import { Flex, FlexItem } from '../../..';
export default function Wrapping() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    width: "80%",
    flexWrap: "nowrap",
    mb: "u5"
  }, React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will NOT"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap")), React.createElement(Flex, {
    width: "50%",
    flexWrap: "wrap",
    mb: "u5"
  }, React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap")), React.createElement(Flex, {
    width: "50%",
    flexWrap: "wrap-reverse",
    mb: "u5"
  }, React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will"), React.createElement(FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap Reverse")));
}
//# sourceMappingURL=Wrapping.js.map