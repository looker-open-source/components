"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlignContent;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function AlignContent() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    justifyContent: "space-between"
  }, _react["default"].createElement(_.Flex, {
    alignContent: "space-around",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "key"
  }, _react["default"].createElement(_.FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Aligned w/"), _react["default"].createElement(_.FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Space"), _react["default"].createElement(_.FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui1"
  }, "Between")), _react["default"].createElement(_.Flex, {
    alignContent: "flex-end",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "inform"
  }, _react["default"].createElement(_.FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "Aligned w/"), _react["default"].createElement(_.FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "Flex"), _react["default"].createElement(_.FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui2"
  }, "End")), _react["default"].createElement(_.Flex, {
    alignContent: "center",
    width: "30%",
    height: "150px",
    flexWrap: "wrap",
    bg: "positive"
  }, _react["default"].createElement(_.FlexItem, {
    width: "70%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Aligned w/"), _react["default"].createElement(_.FlexItem, {
    width: "30%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Flex"), _react["default"].createElement(_.FlexItem, {
    width: "50%",
    m: "u3",
    p: "u2",
    bg: "ui3"
  }, "Center"))));
}
//# sourceMappingURL=AlignContent.js.map