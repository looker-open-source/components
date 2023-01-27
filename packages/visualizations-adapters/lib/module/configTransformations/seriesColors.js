import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series_colors", "series", "custom_color", "default_series_colors"],
  _excluded2 = ["color"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { normalizePivotSeriesKeys } from '../utils';

export const seriesColors = ({
  config,
  data,
  fields
}) => {
  var _fields$measures;
  const {
      series_colors = {},
      series = {},
      custom_color,
      default_series_colors = []
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const seriesColors = normalizePivotSeriesKeys(series_colors);
  const seriesColorValues = (fields === null || fields === void 0 ? void 0 : (_fields$measures = fields.measures) === null || _fields$measures === void 0 ? void 0 : _fields$measures.map(measure => {
    return seriesColors === null || seriesColors === void 0 ? void 0 : seriesColors[measure.name];
  })) || [];
  const colorSet = Array.from(new Set([...seriesColorValues, custom_color, ...default_series_colors])).filter(Boolean);
  const buildArraySeries = (s = []) => {
    var _fields$measures2;
    const arraySeries = [...s];
    const defaultValues = (fields === null || fields === void 0 ? void 0 : (_fields$measures2 = fields.measures) === null || _fields$measures2 === void 0 ? void 0 : _fields$measures2.map((_, i) => ({
      color: colorSet[i]
    }))) || [];
    for (let i = 0; i < defaultValues.length; i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i]);
    }
    return arraySeries;
  };
  const buildNamedSeries = s => {
    var _fields$measures3;
    const namedSeries = fields === null || fields === void 0 ? void 0 : (_fields$measures3 = fields.measures) === null || _fields$measures3 === void 0 ? void 0 : _fields$measures3.reduce((seriesConfig, measure, i) => {
      const {
        name: measureName
      } = measure;
      const _ref = s[measureName] || {},
        {
          color: currentColor
        } = _ref,
        restSeries = _objectWithoutProperties(_ref, _excluded2);
      return _objectSpread(_objectSpread({}, seriesConfig), {}, {
        [measureName]: _objectSpread(_objectSpread({}, restSeries), {}, {
          color: currentColor || colorSet[i]
        })
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
//# sourceMappingURL=seriesColors.js.map