"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerticalProperties;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");

function VerticalProperties(props) {
  return _react["default"].createElement(_.SpaceVertical, props, _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")), _react["default"].createElement(_.Space, {
    align: "start"
  }, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")), _react["default"].createElement(_.Space, {
    align: "end"
  }, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")));
}
//# sourceMappingURL=VerticalProperties.js.map