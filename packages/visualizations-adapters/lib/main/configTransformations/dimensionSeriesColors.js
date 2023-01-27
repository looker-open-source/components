"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionSeriesColors = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _utils = require("../utils");
var _excluded = ["series_colors", "series", "custom_color", "default_series_colors"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MAX_DATA_POINTS = 50;

var dimensionSeriesColors = function dimensionSeriesColors(_ref) {
  var _fields$dimensions;
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var series_colors = config.series_colors,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    _custom_color = config.custom_color,
    default_series_colors = config.default_series_colors,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var fullColorPalette = (0, _utils.deriveColorPalette)(default_series_colors);
  var limitedData = data.slice(0, MAX_DATA_POINTS);
  var dimensionValues = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions.flatMap(function (dimension) {
    return limitedData.map(function (data) {
      return data[dimension.name];
    });
  }).slice(0, MAX_DATA_POINTS)) || [];
  var buildArraySeries = function buildArraySeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var draftseries = dimensionValues.map(function (_, i) {
      var defaultVal = {
        color: fullColorPalette[i]
      };
      return Object.assign({}, defaultVal, s[i]);
    });
    return draftseries;
  };
  var buildNamedSeries = function buildNamedSeries(s) {
    var namedSeries = dimensionValues.reduce(function (draftSeries, dimension, i) {
      var currentValues = s[dimension] || {};
      var defaultVal = {
        color: (series_colors === null || series_colors === void 0 ? void 0 : series_colors[dimension]) || fullColorPalette[i]
      };
      return _objectSpread(_objectSpread({}, draftSeries), {}, (0, _defineProperty2["default"])({}, dimension, Object.assign({}, defaultVal, currentValues)));
    }, {});
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series),
      default_series_colors: default_series_colors
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.dimensionSeriesColors = dimensionSeriesColors;
//# sourceMappingURL=dimensionSeriesColors.js.map