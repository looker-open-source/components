

import isArray from 'lodash/isArray';
import { DEFAULT_EMPTY_FIELDS } from '.';

export const getVisibleMeasureNames = (fields = DEFAULT_EMPTY_FIELDS, config) => {
  const {
    measures = []
  } = fields;
  const visibleMeasures = measures.filter((measure, index) => {
    if (config.series) {
      var _config$series, _config$series$index, _config$series2, _config$series2$measu;
      return isArray(config.series) ? config === null || config === void 0 ? void 0 : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : (_config$series$index = _config$series[index]) === null || _config$series$index === void 0 ? void 0 : _config$series$index.visible : config === null || config === void 0 ? void 0 : (_config$series2 = config.series) === null || _config$series2 === void 0 ? void 0 : (_config$series2$measu = _config$series2[measure.name]) === null || _config$series2$measu === void 0 ? void 0 : _config$series2$measu.visible;
    }

    return true;
  });
  return visibleMeasures.map(measure => measure.name);
};
//# sourceMappingURL=getVisibleMeasureNames.js.map