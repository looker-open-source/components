"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultGlyphSize = void 0;

var getDefaultGlyphSize = function getDefaultGlyphSize(line_width) {
  return Math.round(Math.pow(line_width, 2)) + 20;
};
exports.getDefaultGlyphSize = getDefaultGlyphSize;
//# sourceMappingURL=getDefaultGlyphSize.js.map