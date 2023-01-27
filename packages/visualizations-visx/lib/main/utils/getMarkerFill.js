"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkerFill = void 0;

var getMarkerFill = function getMarkerFill(series, lookerTheme) {
  if (series.style === 'outline') {
    return lookerTheme.colors.background;
  }
  if (series.color) {
    return series.color;
  }
  return lookerTheme.colors.key;
};
exports.getMarkerFill = getMarkerFill;
//# sourceMappingURL=getMarkerFill.js.map