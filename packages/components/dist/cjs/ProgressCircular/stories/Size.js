"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Size;
var _react = _interopRequireDefault(require("react"));
var _ProgressCircular = require("../ProgressCircular");
var _Layout = require("../../Layout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Size() {
  return _react["default"].createElement(_Layout.Space, {
    justify: "center"
  }, _react["default"].createElement(_ProgressCircular.ProgressCircular, {
    size: "xsmall"
  }), _react["default"].createElement(_ProgressCircular.ProgressCircular, {
    size: "small"
  }), _react["default"].createElement(_ProgressCircular.ProgressCircular, {
    size: "medium"
  }), _react["default"].createElement(_ProgressCircular.ProgressCircular, null));
}
//# sourceMappingURL=Size.js.map