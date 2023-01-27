"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deriveColorBlend = void 0;
var _d3Hsv = require("d3-hsv");
var _2 = require(".");

var fallbackVal = function fallbackVal(v1, v2) {
  if (isNaN(v1)) {
    return fallbackVal(v2, 0);
  }
  return v1;
};

var deriveColorBlend = function deriveColorBlend() {
  var baseColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _2.DEFAULT_SERIES_COLORS[0];
  var targetColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _2.DEFAULT_SERIES_COLORS[1];
  var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var colorStops = Math.max(steps - 1, 1);

  var baseHSV = (0, _d3Hsv.hsv)(baseColor);
  var targetHSV = (0, _d3Hsv.hsv)(targetColor);
  var baseHue = fallbackVal(baseHSV.h, targetHSV.h);
  var targetHue = fallbackVal(targetHSV.h, baseHSV.h);
  var baseSat = fallbackVal(baseHSV.s, targetHSV.s);
  var targetSat = fallbackVal(targetHSV.s, baseHSV.s);
  var baseVal = baseHSV.v;
  var targetVal = targetHSV.v;
  var hPerStep = (targetHue - baseHue) / colorStops;
  var sPerStep = (targetSat - baseSat) / colorStops;
  var vPerStep = (targetVal - baseVal) / colorStops;
  return new Array(steps).fill('').map(function (_, i) {
    return (0, _d3Hsv.hsv)(baseHue + hPerStep * i, baseSat + sPerStep * i, baseVal + vPerStep * i).hex();
  });
};
exports.deriveColorBlend = deriveColorBlend;
//# sourceMappingURL=deriveColorBlend.js.map