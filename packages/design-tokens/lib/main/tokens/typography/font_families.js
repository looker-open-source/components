"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFamilies = exports.defaultFonts = exports.defaultFontFallbacks = void 0;
var _typography = require("../../utils/typography");

var sansSerifFontFallbacks = ["'Noto Sans'", "'Noto Sans JP'", "'Noto Sans CJK KR'", "'Noto Sans Arabic UI'", "'Noto Sans Devanagari UI'", "'Noto Sans Hebrew'", "'Noto Sans Thai UI'", 'Helvetica', 'Arial', 'sans-serif'];
var defaultFontFallbacks = {
  body: sansSerifFontFallbacks,
  brand: sansSerifFontFallbacks,
  code: ['Monaco', 'Menlo', "'Ubuntu Mono'", 'Consolas', "'source-code-pro'", 'monospace']
};
exports.defaultFontFallbacks = defaultFontFallbacks;
var defaultFonts = {
  body: 'Roboto',
  brand: 'Roboto',
  code: "'Roboto Mono'"
};
exports.defaultFonts = defaultFonts;
var fontFamilies = (0, _typography.generateFontFamilies)(defaultFonts, defaultFontFallbacks);
exports.fontFamilies = fontFamilies;
//# sourceMappingURL=font_families.js.map