

import { getDataRange } from '@looker/visualizations-adapters';

export const getYAxisRange = ({
  config,
  data,
  fields
}) => {
  var _config$y_axis, _config$y_axis$;
  const [configMin = 'auto', configMax = 'auto'] = (config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.range) || [];
  const [dataMin, dataMax] = getDataRange({
    config,
    data,
    fields
  });
  const min = configMin === 'auto' ? Math.min(0, Math.floor(dataMin)) : Number(configMin);
  const max = configMax === 'auto' ? Math.max(0, Math.ceil(dataMax)) : Number(configMax);
  return [min, max];
};
//# sourceMappingURL=getYAxisRange.js.map