"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.precisionRound = exports.getPrecision = void 0;

var precisionRound = function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
};

exports.precisionRound = precisionRound;

var getPrecision = function getPrecision(number) {
  if (!isFinite(number)) return 0;
  var e = 1;
  var p = 0;

  while (Math.round(number * e) / e !== number) {
    e *= 10;
    p++;
  }

  return p;
};

exports.getPrecision = getPrecision;
//# sourceMappingURL=precisionUtils.js.map