"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativeGlyphSize = void 0;

var MAX_GLYPH_SIZE = 8000;

var getRelativeGlyphSize = function getRelativeGlyphSize(data, dataMin, dataMax) {
  var dataRange = dataMax - dataMin;
  var sizePercent = (data - dataMin) / dataRange + 0.01;
  return Math.round(MAX_GLYPH_SIZE * sizePercent);
};
exports.getRelativeGlyphSize = getRelativeGlyphSize;
//# sourceMappingURL=getRelativeGlyphSize.js.map