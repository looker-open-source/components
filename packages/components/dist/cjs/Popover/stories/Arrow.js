"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Arrow;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../Button");
var _Layout = require("../../Layout");
var _Layout2 = require("../Layout");
var _Popover = require("../Popover");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Arrow(props) {
  return _react["default"].createElement(_Layout.Box, {
    width: 400,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, _react["default"].createElement(_Popover.Popover, _extends({}, props, {
    isOpen: true,
    content: _react["default"].createElement(_Layout2.PopoverContent, null, "Some content"),
    arrow: true
  }), _react["default"].createElement(_Button.Button, null, "Open")));
}
//# sourceMappingURL=Arrow.js.map