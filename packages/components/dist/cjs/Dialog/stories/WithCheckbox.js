"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithCheckbox;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function WithCheckbox() {
  return _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_.DialogLayout, {
      footer: "Footer",
      header: "Header"
    }, "The top line & bottom shadow should not be there.", _react["default"].createElement(_.Checkbox, {
      checked: true
    }))
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=WithCheckbox.js.map