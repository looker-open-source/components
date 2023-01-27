"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Responsive;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Responsive() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Flex, {
    flexDirection: ['column',
    null,
    'row']
  }, _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui5"
  }, "\uD83D\uDC4B"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui3"
  }, "\uD83D\uDCAA"), _react["default"].createElement(_.FlexItem, {
    p: "u4",
    bg: "ui1"
  }, "\uD83D\uDCE6")));
}
//# sourceMappingURL=Responsive.js.map