

import { buildPivotMeasureName } from '.';

const SEPARATOR = ' - ';
export const normalizePivotSeriesKeys = rawConfig => {
  const entries = Object.entries(rawConfig).map(([key, val]) => {
    const pivotPos = key.lastIndexOf(SEPARATOR);
    const measureName = key.substring(pivotPos + SEPARATOR.length);
    const pivotValue = key.substring(0, pivotPos);
    const formattedKey = pivotPos > -1 ? buildPivotMeasureName({
      measureName,
      pivotValue: pivotValue.replace(/Row Total/, '$$$$$$_row_total_$$$$$$')
    }) : key;
    return [formattedKey, val];
  });
  return Object.fromEntries(entries);
};
//# sourceMappingURL=normalizePivotSeriesKeys.js.map