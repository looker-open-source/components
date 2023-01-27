

import { pickSeriesByName } from '@looker/visualizations-adapters';
import find from 'lodash/find';

export const seriesLabelFormatter = (fields, config, item) => {
  const closestSeries = pickSeriesByName(fields, config, item);
  const field = find([...fields.measures, ...fields.dimensions], {
    name: item
  });
  const pivoted_label = field && (field === null || field === void 0 ? void 0 : field.pivoted_label);
  const fallback = item.split('.').pop() || '';
  return closestSeries.label || pivoted_label || (field === null || field === void 0 ? void 0 : field.label) || fallback.replace(/_/g, ' ');
};
//# sourceMappingURL=seriesLabelFormatter.js.map