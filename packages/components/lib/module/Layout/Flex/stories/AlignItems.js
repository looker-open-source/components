
import React from 'react';
import { Flex, FlexItem } from '../../..';
export default function AlignItems() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    mb: "u10"
  }, React.createElement(FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Default (stretch)"), React.createElement(FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "One"), React.createElement(FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Two"), React.createElement(FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Three")), React.createElement(Flex, {
    alignItems: "center",
    mb: "u10"
  }, React.createElement(FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Center"), React.createElement(FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "One"), React.createElement(FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Two"), React.createElement(FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Three")), React.createElement(Flex, {
    alignItems: "flex-start",
    mb: "u10"
  }, React.createElement(FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Start"), React.createElement(FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), React.createElement(FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), React.createElement(FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")), React.createElement(Flex, {
    alignItems: "flex-end",
    mb: "u10"
  }, React.createElement(FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "End"), React.createElement(FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), React.createElement(FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), React.createElement(FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")), React.createElement(Flex, {
    alignItems: "baseline",
    mb: "u10"
  }, React.createElement(FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Baseline"), React.createElement(FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), React.createElement(FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), React.createElement(FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")));
}
//# sourceMappingURL=AlignItems.js.map