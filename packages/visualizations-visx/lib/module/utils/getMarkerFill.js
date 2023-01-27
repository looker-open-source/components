

export const getMarkerFill = (series, lookerTheme) => {
  if (series.style === 'outline') {
    return lookerTheme.colors.background;
  }
  if (series.color) {
    return series.color;
  }
  return lookerTheme.colors.key;
};
//# sourceMappingURL=getMarkerFill.js.map