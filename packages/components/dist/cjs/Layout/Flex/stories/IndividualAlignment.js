"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IndividualAlignment;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function IndividualAlignment() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    height: "200px",
    bg: "key"
  }, _react["default"].createElement(_.FlexItem, {
    alignSelf: "flex-start"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Flex Start")), _react["default"].createElement(_.FlexItem, {
    alignSelf: "flex-end"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Flex End")), _react["default"].createElement(_.FlexItem, {
    alignSelf: "center"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Center")), _react["default"].createElement(_.FlexItem, {
    alignSelf: "baseline"
  }, _react["default"].createElement(_.Box, {
    m: "u3",
    p: "u5",
    bg: "ui1"
  }, "Baseline"))));
}
//# sourceMappingURL=IndividualAlignment.js.map