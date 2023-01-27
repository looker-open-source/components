"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesPointShape = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _utils = require("../utils");
var _excluded = ["series_point_styles", "series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var seriesPointShape = function seriesPointShape(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var series_point_styles = config.series_point_styles,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var measures = (0, _utils.getMeasureNames)(fields);
  var buildArraySeries = function buildArraySeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    for (var i = 0; i < measures.length; i++) {
      arraySeries[i] = (0, _merge["default"])({
        shape: 'circle'
      }, arraySeries[i] || {});
    }
    return arraySeries;
  };
  var buildNamedSeries = function buildNamedSeries(s) {
    var namedSeries = measures.reduce(function (seriesConfig, field) {
      var shape = series_point_styles === null || series_point_styles === void 0 ? void 0 : series_point_styles[field];
      var currentFieldSettings = (0, _pick["default"])(s, field);
      var DEFAULT_SERIES_SHAPE = (0, _defineProperty2["default"])({}, field, {
        shape: !shape || shape === 'automatic' ? 'circle' : shape
      });
      return (0, _merge["default"])(seriesConfig, DEFAULT_SERIES_SHAPE, currentFieldSettings);
    }, {});
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.seriesPointShape = seriesPointShape;
//# sourceMappingURL=seriesPointShape.js.map