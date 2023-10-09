"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FlexGrow;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FlexGrow() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, null, _react["default"].createElement(_.FlexItem, {
    flex: "2"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui4"
  }, "Flex: 2")), _react["default"].createElement(_.FlexItem, {
    flex: "1"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui3"
  }, "Flex: 1")), _react["default"].createElement(_.FlexItem, {
    flex: "1"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui2"
  }, "Flex: 1"))));
}
//# sourceMappingURL=FlexGrow.js.map