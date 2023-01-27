"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Wrapping;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Wrapping() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    width: "80%",
    flexWrap: "nowrap",
    mb: "u5"
  }, _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will NOT"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap")), _react["default"].createElement(_.Flex, {
    width: "50%",
    flexWrap: "wrap",
    mb: "u5"
  }, _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap")), _react["default"].createElement(_.Flex, {
    width: "50%",
    flexWrap: "wrap-reverse",
    mb: "u5"
  }, _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui4"
  }, "These Lines"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui2"
  }, "Will"), _react["default"].createElement(_.FlexItem, {
    width: "40%",
    p: "u5",
    bg: "ui3"
  }, "Wrap Reverse")));
}
//# sourceMappingURL=Wrapping.js.map