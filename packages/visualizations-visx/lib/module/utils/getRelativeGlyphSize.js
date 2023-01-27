

const MAX_GLYPH_SIZE = 8000;

export const getRelativeGlyphSize = (data, dataMin, dataMax) => {
  const dataRange = dataMax - dataMin;
  const sizePercent = (data - dataMin) / dataRange + 0.01;
  return Math.round(MAX_GLYPH_SIZE * sizePercent);
};
//# sourceMappingURL=getRelativeGlyphSize.js.map