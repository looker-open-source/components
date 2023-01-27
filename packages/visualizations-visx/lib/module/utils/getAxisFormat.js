

import { DEFAULT_STRING_FORMAT, DEFAULT_STRING_FORMAT_PERCENT } from '@looker/visualizations-adapters';

export const getYAxisFormat = config => {
  const {
    series = {},
    positioning = ''
  } = config;
  const isPercent = positioning === 'percent';
  const isSingleSeries = !!(series.length === 1 || Object.keys(series).length === 1);
  if (isSingleSeries) {
    const valueFormat = Array.isArray(series) ? series[0].value_format : Object.values(series)[0].value_format;
    return valueFormat;
  } else {
    return isPercent ? DEFAULT_STRING_FORMAT_PERCENT : DEFAULT_STRING_FORMAT;
  }
};

export const getXAxisFormat = fields => {
  if (typeof fields === 'undefined') return '';
  const {
    dimensions = ''
  } = fields;
  if (dimensions && dimensions.length === 1) {
    const {
      value_format
    } = dimensions[0];
    return value_format;
  } else {
    return DEFAULT_STRING_FORMAT;
  }
};
//# sourceMappingURL=getAxisFormat.js.map