import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series_colors", "series", "custom_color", "default_series_colors"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { deriveColorPalette } from '../utils';
const MAX_DATA_POINTS = 50;

export const dimensionSeriesColors = ({
  config,
  data,
  fields
}) => {
  var _fields$dimensions;
  const {
      series_colors,
      series = {},
      custom_color: _custom_color,
      default_series_colors
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const fullColorPalette = deriveColorPalette(default_series_colors);
  const limitedData = data.slice(0, MAX_DATA_POINTS);
  const dimensionValues = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions.flatMap(dimension => {
    return limitedData.map(data => data[dimension.name]);
  }).slice(0, MAX_DATA_POINTS)) || [];
  const buildArraySeries = (s = []) => {
    const draftseries = dimensionValues.map((_, i) => {
      const defaultVal = {
        color: fullColorPalette[i]
      };
      return Object.assign({}, defaultVal, s[i]);
    });
    return draftseries;
  };
  const buildNamedSeries = s => {
    const namedSeries = dimensionValues.reduce((draftSeries, dimension, i) => {
      const currentValues = s[dimension] || {};
      const defaultVal = {
        color: (series_colors === null || series_colors === void 0 ? void 0 : series_colors[dimension]) || fullColorPalette[i]
      };
      return _objectSpread(_objectSpread({}, draftSeries), {}, {
        [dimension]: Object.assign({}, defaultVal, currentValues)
      });
    }, {});
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series),
      default_series_colors
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=dimensionSeriesColors.js.map