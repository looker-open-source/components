"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Windowing;
var _react = _interopRequireDefault(require("react"));
var _2 = require("..");

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