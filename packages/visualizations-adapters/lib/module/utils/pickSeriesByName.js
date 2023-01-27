

import findIndex from 'lodash/findIndex';
import isArray from 'lodash/isArray';

export const pickSeriesByName = (fields, config, key) => {
  const {
    series: seriesList
  } = config;
  if (isArray(seriesList)) {
    const seriesIndex = findIndex(fields.measures, {
      name: key
    });
    return seriesList[seriesIndex];
  } else {
    return (seriesList === null || seriesList === void 0 ? void 0 : seriesList[key]) || {};
  }
};
//# sourceMappingURL=pickSeriesByName.js.map