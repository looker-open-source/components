"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");

function Disabled() {
  return _react["default"].createElement(_.InlineTextArea, {
    disabled: true,
    value: "This text can't be edited because the component is disabled..."
  });
}
//# sourceMappingURL=Disabled.js.map