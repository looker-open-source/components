"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Underline;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");

function Underline() {
  return _react["default"].createElement(_.InlineTextArea, {
    underlineOnlyOnHover: true,
    value: "Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
  });
}
//# sourceMappingURL=Underline.js.map