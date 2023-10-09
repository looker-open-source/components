"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../../../Layout");
var _Radio = require("../Radio");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Radio.Radio, {
    disabled: true
  }), _react["default"].createElement(_Radio.Radio, {
    disabled: true,
    checked: true
  }));
}
//# sourceMappingURL=Disabled.js.map