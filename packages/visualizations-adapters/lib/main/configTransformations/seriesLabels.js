"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesLabels = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _set = _interopRequireDefault(require("lodash/set"));
var _excluded = ["series_labels", "series", "show_single_value_title", "single_value_title"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var seriesLabels = function seriesLabels(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$series_labels = config.series_labels,
    series_labels = _config$series_labels === void 0 ? {} : _config$series_labels,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    _config$show_single_v = config.show_single_value_title,
    show_single_value_title = _config$show_single_v === void 0 ? true : _config$show_single_v,
    _config$single_value_ = config.single_value_title,
    single_value_title = _config$single_value_ === void 0 ? '' : _config$single_value_,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var singleValueTitle = show_single_value_title ? single_value_title : '';
  var buildNamedSeries = function buildNamedSeries(s) {
    var namedSeries = fields.measures.reduce(function (seriesConfig, measure) {
      var name = measure.name;
      var currentFieldSettings = (0, _pick["default"])(s, name);
      var defaultSeriesLabel = (0, _defineProperty2["default"])({}, name, {
        label: (series_labels === null || series_labels === void 0 ? void 0 : series_labels[name]) || measure.label || measure.label_short || singleValueTitle
      });
      return (0, _merge["default"])(seriesConfig, defaultSeriesLabel, currentFieldSettings);
    }, {});
    return namedSeries;
  };
  var buildArraySeries = function buildArraySeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    for (var i = 0; i < fields.measures.length; i++) {
      var measure = fields.measures[i];
      var seriesLabelValues = Object.values(series_labels);
      var _ref3 = arraySeries[i] || {},
        _ref2$label2 = _ref3.label,
        label = _ref2$label2 === void 0 ? seriesLabelValues[i] || measure.label || measure.label_short : _ref2$label2;
      (0, _set["default"])(arraySeries, [i, 'label'], label);
    }
    return arraySeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.seriesLabels = seriesLabels;
//# sourceMappingURL=seriesLabels.js.map