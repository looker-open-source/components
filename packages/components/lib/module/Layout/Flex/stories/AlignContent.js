
import React from 'react';
import { Flex, FlexItem } from '../../..';
export default function AlignContent() {
  return React.createElement(React.Fragment, null, React.createElement(Flex, {
    justifyContent: "space-between"
  }, React.createElement(Flex, {
    alignContent: "space-around",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "key"
  }, React.createElement(FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Aligned w/"), React.createElement(FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Space"), React.createElement(FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Between")), React.createElement(Flex, {
    alignContent: "flex-end",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "inform"
  }, React.createElement(FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "Aligned w/"), React.createElement(FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "Flex"), React.createElement(FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "End")), React.createElement(Flex, {
    alignContent: "center",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "positive"
  }, React.createElement(FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Aligned w/"), React.createElement(FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Flex"), React.createElement(FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Center"))));
}
//# sourceMappingURL=AlignContent.js.map