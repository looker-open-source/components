"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Loading() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    placeholder: "Loading options",
    isLoading: true
  });
}
//# sourceMappingURL=Loading.js.map