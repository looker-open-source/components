"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _useToggle2 = require("../../../../utils/useToggle");
var _ = require("../..");

function Basic(props) {
  var _useToggle = (0, _useToggle2.useToggle)(false),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  return _react["default"].createElement(_.ToggleSwitch, (0, _extends2["default"])({
    onChange: toggle,
    on: value
  }, props));
}
//# sourceMappingURL=Basic.js.map