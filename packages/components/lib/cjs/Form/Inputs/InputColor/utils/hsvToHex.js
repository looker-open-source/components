"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsvToHex = void 0;

var _d3Hsv = require("d3-hsv");

var hsvToHex = function hsvToHex(color) {
  return (0, _d3Hsv.hsv)(color.h, color.s, color.v).hex();
};

exports.hsvToHex = hsvToHex;
//# sourceMappingURL=hsvToHex.js.map