"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checked;
var _react = _interopRequireDefault(require("react"));
var _useToggle2 = require("../../../../utils/useToggle");
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Checked() {
  var _useToggle = (0, _useToggle2.useToggle)(false),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  return _react["default"].createElement(_.ToggleSwitch, {
    onChange: toggle,
    on: value,
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map