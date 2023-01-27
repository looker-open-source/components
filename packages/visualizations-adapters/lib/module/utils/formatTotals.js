

import { buildPivotMeasureName } from './buildPivotMeasureName';
import has from 'lodash/has';
const isTotalsValue = obj => {
  return has(obj, 'value');
};
export const formatTotals = (totals = {}) => {
  const entries = {};
  Object.entries(totals).forEach(([key, obj]) => {
    if (isTotalsValue(obj)) {
      entries[key] = obj.value;
    } else {
      Object.entries(obj).forEach(([innerKey, innerObj]) => {
        const measureName = buildPivotMeasureName({
          measureName: key,
          pivotValue: innerKey
        });
        entries[measureName] = innerObj.value;
      });
    }
  });
  return entries;
};
//# sourceMappingURL=formatTotals.js.map