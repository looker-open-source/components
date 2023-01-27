"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemOrder;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function ItemOrder() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    bg: "ui1",
    mb: "u5"
  }, _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui2"
  }, "0")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "1")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui3"
  }, "2")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui5",
    color: "inverseOn"
  }, "3")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui4"
  }, "4"))), _react["default"].createElement(_.Flex, {
    bg: "ui1"
  }, _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui2"
  }, "0")), _react["default"].createElement(_.FlexItem, {
    order: "2"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "1")), _react["default"].createElement(_.FlexItem, {
    order: "1"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui3"
  }, "2")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui5",
    color: "inverseOn"
  }, "3")), _react["default"].createElement(_.FlexItem, {
    order: "-1"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui4"
  }, "4"))));
}
//# sourceMappingURL=ItemOrder.js.map