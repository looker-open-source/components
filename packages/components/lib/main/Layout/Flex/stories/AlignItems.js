"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlignItems;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function AlignItems() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    mb: "u10"
  }, _react["default"].createElement(_.FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Default (stretch)"), _react["default"].createElement(_.FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "One"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Two"), _react["default"].createElement(_.FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Three")), _react["default"].createElement(_.Flex, {
    alignItems: "center",
    mb: "u10"
  }, _react["default"].createElement(_.FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Center"), _react["default"].createElement(_.FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "One"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Two"), _react["default"].createElement(_.FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Three")), _react["default"].createElement(_.Flex, {
    alignItems: "flex-start",
    mb: "u10"
  }, _react["default"].createElement(_.FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Start"), _react["default"].createElement(_.FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), _react["default"].createElement(_.FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")), _react["default"].createElement(_.Flex, {
    alignItems: "flex-end",
    mb: "u10"
  }, _react["default"].createElement(_.FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "End"), _react["default"].createElement(_.FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), _react["default"].createElement(_.FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")), _react["default"].createElement(_.Flex, {
    alignItems: "baseline",
    mb: "u10"
  }, _react["default"].createElement(_.FlexItem, {
    p: "u10",
    bg: "ui1"
  }, "Baseline"), _react["default"].createElement(_.FlexItem, {
    p: "u5",
    bg: "ui2"
  }, "Two"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "Three"), _react["default"].createElement(_.FlexItem, {
    p: "u3",
    bg: "ui4"
  }, "Four")));
}
//# sourceMappingURL=AlignItems.js.map