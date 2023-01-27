"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Loading() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    placeholder: "Loading options",
    isLoading: true
  });
}
//# sourceMappingURL=Loading.js.map