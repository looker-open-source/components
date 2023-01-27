

import { isNumeric } from './isNumeric';

export const getSeriesMin = (seriesName, data) => {
  const values = data.map(d => {
    const val = d[seriesName];
    return isNumeric(val) ? Number(val) : Infinity;
  });
  const minVal = Math.min(...values);

  return minVal === Infinity ? 0 : minVal;
};
//# sourceMappingURL=getSeriesMin.js.map