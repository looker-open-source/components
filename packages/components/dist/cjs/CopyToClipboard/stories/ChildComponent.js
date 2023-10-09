"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChildComponent;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ChildComponent() {
  return _react["default"].createElement(_.CopyToClipboard, {
    content: "here is some text to be copied",
    success: _react["default"].createElement(_.Button, {
      color: "positive"
    }, "Success")
  }, _react["default"].createElement(_.Button, null, "Copy stuff"));
}
//# sourceMappingURL=ChildComponent.js.map