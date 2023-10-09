"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithLabel;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _2 = require("../../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function WithLabel(props) {
  return _react["default"].createElement(_2.Space, null, _react["default"].createElement(_2.Label, {
    htmlFor: "demo-id"
  }, "Label Text"), _react["default"].createElement(_.InputTime, _extends({
    id: "demo-id"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map