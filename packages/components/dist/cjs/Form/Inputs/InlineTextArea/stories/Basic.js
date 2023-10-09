"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../../");
var _2 = require("../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_2.InlineTextArea, {
    placeholder: "Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
  }), _react["default"].createElement(_2.InlineTextArea, {
    value: "Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
  }));
}
//# sourceMappingURL=Basic.js.map