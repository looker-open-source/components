"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixScaledColors = void 0;
var _getLuminance = _interopRequireDefault(require("polished/lib/color/getLuminance"));
var _mix = _interopRequireDefault(require("polished/lib/color/mix"));
var _scaleMixAmount = require("./scaleMixAmount");

var mixScaledColors = function mixScaledColors(mixAmount, foreground, background) {
  var colorLuminance = (0, _getLuminance["default"])(background);

  var luminanceAdjustmentScale = {
    lower: 1.3,
    lowest: 1.7
  };

  var adjustment = mixAmount;
  if (colorLuminance < 0.16 && colorLuminance > 0.08) {
    adjustment = luminanceAdjustmentScale.lower;
  } else if (colorLuminance < 0.08) {
    adjustment = luminanceAdjustmentScale.lowest;
  }

  var mixAdjustment = colorLuminance > 0.3 ? mixAmount : (0, _scaleMixAmount.scaleMixAmount)(mixAmount, adjustment);
  return (0, _mix["default"])(mixAdjustment / 100, foreground, background);
};
exports.mixScaledColors = mixScaledColors;
//# sourceMappingURL=mixScaledColors.js.map