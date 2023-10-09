"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_.InlineTextArea, {
    disabled: true,
    value: "This text can't be edited because the component is disabled..."
  });
}
//# sourceMappingURL=Disabled.js.map