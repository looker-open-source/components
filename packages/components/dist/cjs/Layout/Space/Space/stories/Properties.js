"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Properties;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Properties(props) {
  return _react["default"].createElement(_.Space, props, _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")), _react["default"].createElement(_.SpaceVertical, {
    align: "center"
  }, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")), _react["default"].createElement(_.SpaceVertical, {
    align: "end"
  }, _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, {
    size: "small"
  }, "Button B"), _react["default"].createElement(_.Button, {
    size: "large"
  }, "Button C")));
}
//# sourceMappingURL=Properties.js.map