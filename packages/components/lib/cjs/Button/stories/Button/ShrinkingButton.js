"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShrinkingButton;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

function ShrinkingButton() {
  return _react["default"].createElement(_.Box2, {
    display: "flex",
    width: 200
  }, _react["default"].createElement(_.Box2, {
    width: 250
  }, "Some text"), _react["default"].createElement(_.Button, null, "Don't shrink me"));
}
//# sourceMappingURL=ShrinkingButton.js.map