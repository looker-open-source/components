

import isArray from 'lodash/isArray';
import add from 'lodash/add';
import get from 'lodash/get';
export const getDataRange = ({
  config,
  data,
  fields
}) => {
  const positioning = get(config, ['positioning'], 'overlay');
  const eligibleMeasures = fields.measures.filter((measure, index) => {
    if (!measure.is_numeric) return false;

    if (config.series) {
      var _config$series, _config$series$index, _config$series2, _config$series2$measu;
      return isArray(config.series) ? config === null || config === void 0 ? void 0 : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : (_config$series$index = _config$series[index]) === null || _config$series$index === void 0 ? void 0 : _config$series$index.visible : config === null || config === void 0 ? void 0 : (_config$series2 = config.series) === null || _config$series2 === void 0 ? void 0 : (_config$series2$measu = _config$series2[measure.name]) === null || _config$series2$measu === void 0 ? void 0 : _config$series2$measu.visible;
    }

    return true;
  }).map(measure => measure.name);
  const range = data.reduce((draftRange, datum) => {
    const [currentMin, currentMax] = draftRange;
    const datumValues = eligibleMeasures.map(name => datum[name]);

    const accumulatedValue = datumValues.reduce(add, 0);
    const newMax = Math.max(...(positioning === 'stacked' ? [accumulatedValue] : datumValues), currentMax);
    const newMin = Math.min(...(positioning === 'stacked' ? [accumulatedValue] : datumValues), currentMin);
    return [newMin, newMax];
  }, [Infinity, -Infinity]);
  return range;
};
//# sourceMappingURL=getDataRange.js.map