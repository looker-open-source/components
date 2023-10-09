"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checked;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../../../Layout");
var _Radio = require("../Radio");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Checked() {
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Radio.Radio, null), _react["default"].createElement(_Radio.Radio, {
    checked: true
  }));
}
//# sourceMappingURL=Checked.js.map