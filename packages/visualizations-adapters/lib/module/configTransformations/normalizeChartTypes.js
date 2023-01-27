import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import has from 'lodash/has';
export const CHART_TYPE_MAP = {
  '': 'default',
  area: 'area',
  bar: 'bar',
  column: 'column',
  default: 'default',
  line: 'line',
  looker_area: 'area',
  looker_bar: 'bar',
  looker_column: 'column',
  looker_grid: 'table',
  looker_line: 'line',
  looker_pie: 'pie',
  looker_scatter: 'scatter',
  pie: 'pie',
  scatter: 'scatter',
  single_value: 'single_value',
  sparkline: 'sparkline',
  table: 'table'
};
const isKnownChartType = type => {
  return has(CHART_TYPE_MAP, type);
};

export const normalizeChartTypes = ({
  config,
  data,
  fields
}) => {
  const {
    type = CHART_TYPE_MAP.default
  } = config;
  const normalizedType = isKnownChartType(type) ? CHART_TYPE_MAP[type] : type;
  return {
    config: _objectSpread(_objectSpread({}, config), {}, {
      type: normalizedType
    }),
    data,
    fields
  };
};
//# sourceMappingURL=normalizeChartTypes.js.map