"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tintOrShadeUiColor = void 0;
var _getLuminance = _interopRequireDefault(require("polished/lib/color/getLuminance"));
var _shade = _interopRequireDefault(require("polished/lib/color/shade"));
var _tint = _interopRequireDefault(require("polished/lib/color/tint"));
var _scaleMixAmount = require("./scaleMixAmount");

var tintOrShadeUiColor = function tintOrShadeUiColor(mixAmount, color) {
  var isBright = (0, _getLuminance["default"])(color) > 0.5;
  var mixAdjustment = isBright ? mixAmount : (0, _scaleMixAmount.scaleMixAmount)(mixAmount, 1.5);

  var mixPercent = mixAdjustment > 100 ? 1 : mixAdjustment / 100;
  return (isBright ? _shade["default"] : _tint["default"])(mixPercent, color);
};
exports.tintOrShadeUiColor = tintOrShadeUiColor;
//# sourceMappingURL=tintOrShadeUiColor.js.map