"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Windowing;
var _react = _interopRequireDefault(require("react"));
var _2 = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Windowing() {
  var options1k = Array.from(Array(1000), function (_, index) {
    return {
      value: "".concat(index)
    };
  });
  return _react["default"].createElement(_2.Select, {
    maxWidth: 400,
    placeholder: "So many options...",
    options: options1k
  });
}
//# sourceMappingURL=Windowing.js.map