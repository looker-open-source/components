"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AsideCollapse;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../../utils");
var _ = require("../../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function AsideCollapse(props) {
  var _useToggle = (0, _utils.useToggle)(false),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Aside, _extends({
    collapse: !value
  }, props), "Aside content"), _react["default"].createElement(_.FieldToggleSwitch, {
    m: "small",
    label: "Show Aside",
    onChange: toggle,
    on: value
  }));
}
//# sourceMappingURL=Collapse.js.map