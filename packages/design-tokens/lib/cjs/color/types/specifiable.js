"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiableTextColors = exports.specifiableColors = exports.intentColors = exports.coreColors = void 0;
var coreColors = ['key', 'background', 'pageBackground', 'text'];
exports.coreColors = coreColors;
var intentColors = ['link', 'critical', 'warn', 'positive', 'inform', 'calculation', 'dimension', 'measure'];
exports.intentColors = intentColors;
var specifiableTextColors = ['title', 'body'];
exports.specifiableTextColors = specifiableTextColors;
var specifiableColors = [].concat(coreColors, intentColors);
exports.specifiableColors = specifiableColors;
//# sourceMappingURL=specifiable.js.map