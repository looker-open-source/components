"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AsideCollapse;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../../utils");
var _ = require("../../../..");

function AsideCollapse(props) {
  var _useToggle = (0, _utils.useToggle)(false),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Aside, (0, _extends2["default"])({
    collapse: !value
  }, props), "Aside content"), _react["default"].createElement(_.FieldToggleSwitch, {
    m: "small",
    label: "Show Aside",
    onChange: toggle,
    on: value
  }));
}
//# sourceMappingURL=Collapse.js.map