"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Combined;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../../../Layout");
var _InputColor = require("../InputColor");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Combined() {
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_InputColor.InputColor, null), _react["default"].createElement(_InputColor.InputColor, {
    value: "green"
  }), _react["default"].createElement(_InputColor.InputColor, {
    defaultValue: "purple"
  }), _react["default"].createElement(_InputColor.InputColor, {
    disabled: true
  }), _react["default"].createElement(_InputColor.InputColor, {
    defaultValue: "green",
    disabled: true
  }), _react["default"].createElement(_InputColor.InputColor, {
    defaultValue: "green",
    readOnly: true
  }));
}
//# sourceMappingURL=Combined.js.map