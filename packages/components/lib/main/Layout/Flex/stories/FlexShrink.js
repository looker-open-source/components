"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FlexShrink;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function FlexShrink() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    width: "500px"
  }, _react["default"].createElement(_.FlexItem, {
    flex: "1 0 200px"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui4"
  }, "No Shrink")), _react["default"].createElement(_.FlexItem, {
    flex: "1 1 200px"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui3"
  }, "I'll shrink")), _react["default"].createElement(_.FlexItem, {
    flex: "1 1 200px"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    bg: "ui2"
  }, "I'll shrink"))));
}
//# sourceMappingURL=FlexShrink.js.map