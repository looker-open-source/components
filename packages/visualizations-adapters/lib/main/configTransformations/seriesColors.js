"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesColors = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _utils = require("../utils");
var _excluded = ["series_colors", "series", "custom_color", "default_series_colors"],
  _excluded2 = ["color"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var seriesColors = function seriesColors(_ref) {
  var _fields$measures;
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$series_colors = config.series_colors,
    series_colors = _config$series_colors === void 0 ? {} : _config$series_colors,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    custom_color = config.custom_color,
    _config$default_serie = config.default_series_colors,
    default_series_colors = _config$default_serie === void 0 ? [] : _config$default_serie,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var seriesColors = (0, _utils.normalizePivotSeriesKeys)(series_colors);
  var seriesColorValues = (fields === null || fields === void 0 ? void 0 : (_fields$measures = fields.measures) === null || _fields$measures === void 0 ? void 0 : _fields$measures.map(function (measure) {
    return seriesColors === null || seriesColors === void 0 ? void 0 : seriesColors[measure.name];
  })) || [];
  var colorSet = Array.from(new Set([].concat((0, _toConsumableArray2["default"])(seriesColorValues), [custom_color], (0, _toConsumableArray2["default"])(default_series_colors)))).filter(Boolean);
  var buildArraySeries = function buildArraySeries() {
    var _fields$measures2;
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    var defaultValues = (fields === null || fields === void 0 ? void 0 : (_fields$measures2 = fields.measures) === null || _fields$measures2 === void 0 ? void 0 : _fields$measures2.map(function (_, i) {
      return {
        color: colorSet[i]
      };
    })) || [];
    for (var i = 0; i < defaultValues.length; i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i]);
    }
    return arraySeries;
  };
  var buildNamedSeries = function buildNamedSeries(s) {
    var _fields$measures3;
    var namedSeries = fields === null || fields === void 0 ? void 0 : (_fields$measures3 = fields.measures) === null || _fields$measures3 === void 0 ? void 0 : _fields$measures3.reduce(function (seriesConfig, measure, i) {
      var measureName = measure.name;
      var _ref2 = s[measureName] || {},
        currentColor = _ref2.color,
        restSeries = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
      return _objectSpread(_objectSpread({}, seriesConfig), {}, (0, _defineProperty2["default"])({}, measureName, _objectSpread(_objectSpread({}, restSeries), {}, {
        color: currentColor || colorSet[i]
      })));
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
exports.seriesColors = seriesColors;
//# sourceMappingURL=seriesColors.js.map