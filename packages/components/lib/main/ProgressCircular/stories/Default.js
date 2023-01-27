"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Default;
var _react = _interopRequireDefault(require("react"));
var _ProgressCircular = require("../ProgressCircular");
var _Layout = require("../../Layout");

function Default() {
  return _react["default"].createElement(_Layout.Space, {
    justify: "center"
  }, _react["default"].createElement(_ProgressCircular.ProgressCircular, null));
}
//# sourceMappingURL=Default.js.map