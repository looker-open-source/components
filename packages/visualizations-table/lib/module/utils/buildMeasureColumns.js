import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const buildMeasureColumns = (measures, config) => {
  return measures.reduce((cols, measure, i) => {
    var _config$series;
    const pivotKey = measure.pivot_key || '';
    const group = cols[pivotKey] || [];
    const seriesConfig = _objectSpread(_objectSpread({}, measure), Array.isArray(config.series) ? config.series[i] : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : _config$series[measure.name]);
    return _objectSpread(_objectSpread({}, cols), {}, {
      [pivotKey]: [...group, {
        header: seriesConfig.label,
        accessorFn: data => data[measure.name],
        id: measure.name
      }]
    });
  }, {});
};
//# sourceMappingURL=buildMeasureColumns.js.map