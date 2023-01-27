"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildMeasureColumns = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var buildMeasureColumns = function buildMeasureColumns(measures, config) {
  return measures.reduce(function (cols, measure, i) {
    var _config$series;
    var pivotKey = measure.pivot_key || '';
    var group = cols[pivotKey] || [];
    var seriesConfig = _objectSpread(_objectSpread({}, measure), Array.isArray(config.series) ? config.series[i] : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : _config$series[measure.name]);
    return _objectSpread(_objectSpread({}, cols), {}, (0, _defineProperty2["default"])({}, pivotKey, [].concat((0, _toConsumableArray2["default"])(group), [{
      header: seriesConfig.label,
      accessorFn: function accessorFn(data) {
        return data[measure.name];
      },
      id: measure.name
    }])));
  }, {});
};
exports.buildMeasureColumns = buildMeasureColumns;
//# sourceMappingURL=buildMeasureColumns.js.map