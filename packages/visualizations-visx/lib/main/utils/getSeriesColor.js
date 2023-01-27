"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSeriesColor = void 0;

var getSeriesColor = function getSeriesColor(series, lookerTheme) {
  if (series !== null && series !== void 0 && series.color) {
    return series.color;
  }
  return lookerTheme.colors.key;
};
exports.getSeriesColor = getSeriesColor;
//# sourceMappingURL=getSeriesColor.js.map