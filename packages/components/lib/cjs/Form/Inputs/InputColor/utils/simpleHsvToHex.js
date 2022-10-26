"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleHsvToHex = void 0;

var _d3Hsv = require("d3-hsv");

var simpleHsvToHex = function simpleHsvToHex(color) {
  return (0, _d3Hsv.hsv)(color.h, color.s, color.v).rgb().hex();
};

exports.simpleHsvToHex = simpleHsvToHex;
//# sourceMappingURL=simpleHsvToHex.js.map