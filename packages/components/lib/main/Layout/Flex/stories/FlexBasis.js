"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FlexBasis;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function FlexBasis() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, null, _react["default"].createElement(_.FlexItem, {
    flexBasis: "20%"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    m: "u3",
    bg: "ui4"
  }, "I am 20% of container")), _react["default"].createElement(_.FlexItem, {
    flexBasis: "5.5rem"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    m: "u3",
    bg: "ui3"
  }, "I am 5.5rem of container")), _react["default"].createElement(_.FlexItem, {
    flexBasis: "150px"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    m: "u3",
    bg: "ui2"
  }, "I am 150px of container")), _react["default"].createElement(_.FlexItem, null, _react["default"].createElement(_.Box, {
    p: "u3",
    m: "u3",
    bg: "ui1"
  }, "I am sized to my content"))));
}
//# sourceMappingURL=FlexBasis.js.map