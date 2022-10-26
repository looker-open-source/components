"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixColors = void 0;

var _mix = _interopRequireDefault(require("polished/lib/color/mix"));

var mixColors = function mixColors(mixAmount, foreground, background) {
  return mixAmount === 100 ? foreground : (0, _mix["default"])(mixAmount / 100, foreground, background);
};

exports.mixColors = mixColors;
//# sourceMappingURL=mixColors.js.map