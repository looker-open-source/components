"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CloseIconButton;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function CloseIconButton(props) {
  return _react["default"].createElement(_.Dialog, _extends({}, props, {
    content: _react["default"].createElement(_.DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }), _react["default"].createElement(_.Button, null, "Open Dialog"));
}
//# sourceMappingURL=CloseIconButton.js.map