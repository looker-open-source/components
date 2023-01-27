"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClickOutside;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function ClickOutside() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
    type: "text",
    style: {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: 100
    }
  }), _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "button 1"), _react["default"].createElement("button", null, "button 2"))
  }, _react["default"].createElement("button", null, "Open Dialog")));
}
//# sourceMappingURL=ClickOutside.js.map