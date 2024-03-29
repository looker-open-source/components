"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Resize;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Resize() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.TextArea, {
    resize: true,
    placeholder: "resize vertically"
  }), _react["default"].createElement(_.TextArea, {
    resize: "none",
    placeholder: "no resize"
  }), _react["default"].createElement(_.TextArea, {
    resize: false,
    placeholder: "no resize"
  }), _react["default"].createElement(_.TextArea, {
    resize: "vertical",
    placeholder: "only resize vertically"
  }));
}
//# sourceMappingURL=Resize.js.map