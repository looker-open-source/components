

import { isNumeric } from './isNumeric';

export const getSeriesMax = (seriesName, data) => {
  const values = data.map(d => {
    const val = d[seriesName];
    return isNumeric(val) ? Number(val) : -Infinity;
  });
  const maxVal = Math.max(...values);

  return maxVal === -Infinity ? 0 : maxVal;
};
//# sourceMappingURL=getSeriesMax.js.map