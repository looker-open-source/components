

export const getSeriesColor = (series, lookerTheme) => {
  if (series !== null && series !== void 0 && series.color) {
    return series.color;
  }
  return lookerTheme.colors.key;
};
//# sourceMappingURL=getSeriesColor.js.map