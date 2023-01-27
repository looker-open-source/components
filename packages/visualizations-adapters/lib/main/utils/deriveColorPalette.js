"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deriveColorPalette = void 0;
var _d3Hsv = require("d3-hsv");
var _utils = require("../utils");

var colorTransformations = [{
  h: 0,
  s: 0,
  v: 0
},
{
  h: 45,
  s: -0.05,
  v: 0
},
{
  h: 90,
  s: 0,
  v: 0
},
{
  h: -60,
  s: 0,
  v: 0
},
{
  h: -90,
  s: 0,
  v: 0
},
{
  h: 180,
  s: 0,
  v: 0
},
{
  h: 0,
  s: 0.15,
  v: 0.15
},
{
  h: 0,
  s: 0.15,
  v: -0.25
},
{
  h: 0,
  s: -0.25,
  v: -0.25
},
{
  h: 180,
  s: -0.25,
  v: -0.25
}];

var deriveColorPalette = function deriveColorPalette() {
  var baseColors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.DEFAULT_SERIES_COLORS;
  return colorTransformations.flatMap(function (t) {
    var hueDiff = t.h,
      satDiff = t.s,
      valDiff = t.v;
    return baseColors.map(function (color) {
      var _hsv = (0, _d3Hsv.hsv)(color),
        h = _hsv.h,
        s = _hsv.s,
        v = _hsv.v;
      var newHue = (h + hueDiff) % 360;
      var newSat = Math.max(Math.min(s + satDiff, 1), 0);
      var newVal = Math.max(Math.min(v + valDiff, 1), 0);
      return (0, _d3Hsv.hsv)(newHue, newSat, newVal).hex();
    });
  });
};
exports.deriveColorPalette = deriveColorPalette;
//# sourceMappingURL=deriveColorPalette.js.map