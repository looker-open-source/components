"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgba = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _chunk = _interopRequireDefault(require("lodash/chunk"));

var hexToRgba = function hexToRgba(hex, opacity) {
  if (opacity < 0 || opacity > 1) {
    throw new Error("Invalid opacity value: ".concat(opacity, ". Please provide a decimal number between 0 and 1."));
  }
  if (hex[0] === '#' && (hex.length === 4 || hex.length === 7)) {
    return hexToRgba(hex.slice(1), opacity);
  }
  if (hex.length === 3 || hex.length === 6) {
    var chunkLength = hex.length === 3 ? 1 : 2;
    var _chunk$map3 = (0, _chunk["default"])(hex, chunkLength).map(function (chunk) {
        var color = chunkLength === 1 ? chunk[0] + chunk[0] : chunk.join('');
        return "0x".concat(color);
      }),
      _chunk$map4 = (0, _slicedToArray2["default"])(_chunk$map3, 3),
      r = _chunk$map4[0],
      g = _chunk$map4[1],
      b = _chunk$map4[2];

    return "rgba(".concat(+r, ", ").concat(+g, ", ").concat(+b, ", ").concat(String(opacity), ")");
  } else {
    throw new Error("Invalid hexadecimal color code: ".concat(hex));
  }
};
exports.hexToRgba = hexToRgba;
//# sourceMappingURL=hexToRgba.js.map