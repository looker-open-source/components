"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesValueFormat = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _get = _interopRequireDefault(require("lodash/get"));
var _constants = require("../utils/constants");
var _excluded = ["series", "value_format", "label_value_format", "series_value_format"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var seriesValueFormat = function seriesValueFormat(_ref) {
  var config = _ref.config,
    fields = _ref.fields,
    data = _ref.data;
  var _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    value_format = config.value_format,
    label_value_format = config.label_value_format,
    _config$series_value_ = config.series_value_format,
    series_value_format = _config$series_value_ === void 0 ? {} : _config$series_value_,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var valueFormat = value_format || label_value_format;
  var buildArraySeries = function buildArraySeries() {
    var _fields$measures;
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    var defaultValues = fields === null || fields === void 0 ? void 0 : (_fields$measures = fields.measures) === null || _fields$measures === void 0 ? void 0 : _fields$measures.map(function (measure) {
      return {
        value_format: (0, _get["default"])(series_value_format, [measure.name, 'format_string']) || (0, _get["default"])(measure, 'value_format') || valueFormat || _constants.DEFAULT_STRING_FORMAT
      };
    });
    for (var i = 0; i < (defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.length); i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i]);
    }
    return arraySeries;
  };
  var buildNamedSeries = function buildNamedSeries(s) {
    var _fields$measures2;
    var namedSeries = fields === null || fields === void 0 ? void 0 : (_fields$measures2 = fields.measures) === null || _fields$measures2 === void 0 ? void 0 : _fields$measures2.reduce(function (seriesConfig, measure) {
      var name = measure.name;
      var currentFieldSettings = (0, _pick["default"])(s, name);
      var seriesValueFormatString = (0, _get["default"])(series_value_format, [name, 'format_string']);
      var measureValueFormat = (0, _get["default"])(measure, 'value_format');
      var defaultValueFormat = (0, _defineProperty2["default"])({}, name, {
        value_format: seriesValueFormatString || measureValueFormat || valueFormat || _constants.DEFAULT_STRING_FORMAT
      });
      return (0, _merge["default"])(seriesConfig, defaultValueFormat, currentFieldSettings);
    }, {});
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    fields: fields,
    data: data
  };
};
exports.seriesValueFormat = seriesValueFormat;
//# sourceMappingURL=seriesValueFormat.js.map