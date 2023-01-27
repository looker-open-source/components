"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesSize = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _set = _interopRequireDefault(require("lodash/set"));
var _utils = require("../utils");
var _excluded = ["size_by_field", "series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function removeInvalidSizeBy() {
  var series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fields = arguments.length > 1 ? arguments[1] : undefined;
  var measureNames = (0, _utils.getMeasureNames)(fields);
  var entries = Object.entries(series || {});
  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var _entries$_i2 = (0, _slicedToArray2["default"])(_entries[_i], 2),
      _key = _entries$_i2[0],
      seriesEntry = _entries$_i2[1];
    var size_by = seriesEntry.size_by;
    (0, _set["default"])(series, [_key, 'size_by'], size_by && measureNames.includes(size_by) ? size_by : false);
  }
  return series;
}

var seriesSize = function seriesSize(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var size_by_field = config.size_by_field,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var measures = (0, _utils.getMeasureNames)(fields);
  var defaultSizeByValue = size_by_field && size_by_field.length ? size_by_field : false;
  var buildNamedSeries = function buildNamedSeries(s) {
    var namedSeries = measures.reduce(function (seriesConfig, field) {
      var currentFieldSettings = (0, _pick["default"])(s, field);
      var defaultSizeBy = (0, _defineProperty2["default"])({}, field, {
        size_by: defaultSizeByValue
      });
      var draftSeries = (0, _merge["default"])(seriesConfig, defaultSizeBy, currentFieldSettings);
      return draftSeries;
    }, {});
    return removeInvalidSizeBy(namedSeries, fields);
  };
  var buildArraySeries = function buildArraySeries(s) {
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    for (var i = 0; i < measures.length; i++) {
      var currentSeries = arraySeries[i] || {};
      var draftSeries = _objectSpread({
        size_by: defaultSizeByValue
      }, currentSeries);
      arraySeries[i] = draftSeries;
    }
    return removeInvalidSizeBy(arraySeries, fields);
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.seriesSize = seriesSize;
//# sourceMappingURL=seriesSize.js.map