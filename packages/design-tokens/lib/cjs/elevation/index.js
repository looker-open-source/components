"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ElevationRamp", {
  enumerable: true,
  get: function get() {
    return _types.ElevationRamp;
  }
});
Object.defineProperty(exports, "Elevations", {
  enumerable: true,
  get: function get() {
    return _types.Elevations;
  }
});
exports.elevations = void 0;

var _types = require("./types");

var colorBase = '60, 64, 67';
var baseShadowColor = "rgba(".concat(colorBase, ", .30)");
var ambientShadowColor = "rgba(".concat(colorBase, ", .15)");
var elevations = {
  plus0: "0 0 0 1px rgba(".concat(colorBase, ", .2)"),
  plus1: "0px 1px 2px 0px ".concat(baseShadowColor, ",0px 1px 3px 1px ").concat(ambientShadowColor),
  plus2: "0px 1px 2px 0px ".concat(baseShadowColor, ",0px 2px 6px 2px ").concat(ambientShadowColor),
  plus3: "0px 1px 3px 0px  ".concat(baseShadowColor, ",0px 4px 8px 3px ").concat(ambientShadowColor),
  plus4: "0px 2px 3px 0px  ".concat(baseShadowColor, ",0px 6px 10px 4px ").concat(ambientShadowColor),
  plus5: "0px 4px 4px 0px  ".concat(baseShadowColor, ",0px 8px 12px 6px ").concat(ambientShadowColor)
};
exports.elevations = elevations;
//# sourceMappingURL=index.js.map