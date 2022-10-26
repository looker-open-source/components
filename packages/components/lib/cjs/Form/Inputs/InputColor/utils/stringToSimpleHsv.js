"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToSimpleHsv = void 0;

var _d3Hsv = require("d3-hsv");

var stringToSimpleHsv = function stringToSimpleHsv(color) {
  var _hsv = (0, _d3Hsv.hsv)(color),
      h = _hsv.h,
      s = _hsv.s,
      v = _hsv.v;

  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  return {
    h: h,
    s: s,
    v: v
  };
};

exports.stringToSimpleHsv = stringToSimpleHsv;
//# sourceMappingURL=stringToSimpleHsv.js.map