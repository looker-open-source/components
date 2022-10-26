"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultIntentColors = exports.defaultCoreColors = void 0;

var _palette = require("../legacy/palette");

var calculation = '#319220';
var dimension = '#31689E';
var measure = '#C2772E';
var defaultCoreColors = {
  background: _palette.white,
  key: _palette.purple400,
  pageBackground: _palette.white,
  text: _palette.charcoal800
};
exports.defaultCoreColors = defaultCoreColors;
var defaultIntentColors = {
  calculation: calculation,
  critical: _palette.red500,
  dimension: dimension,
  inform: _palette.blue500,
  link: _palette.blue600,
  measure: measure,
  positive: _palette.green500,
  warn: _palette.yellow500
};
exports.defaultIntentColors = defaultIntentColors;
//# sourceMappingURL=defaults.js.map