"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataRange = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _add = _interopRequireDefault(require("lodash/add"));
var _get = _interopRequireDefault(require("lodash/get"));

var getDataRange = function getDataRange(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var positioning = (0, _get["default"])(config, ['positioning'], 'overlay');
  var eligibleMeasures = fields.measures.filter(function (measure, index) {
    if (!measure.is_numeric) return false;

    if (config.series) {
      var _config$series, _config$series$index, _config$series2, _config$series2$measu;
      return (0, _isArray["default"])(config.series) ? config === null || config === void 0 ? void 0 : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : (_config$series$index = _config$series[index]) === null || _config$series$index === void 0 ? void 0 : _config$series$index.visible : config === null || config === void 0 ? void 0 : (_config$series2 = config.series) === null || _config$series2 === void 0 ? void 0 : (_config$series2$measu = _config$series2[measure.name]) === null || _config$series2$measu === void 0 ? void 0 : _config$series2$measu.visible;
    }

    return true;
  }).map(function (measure) {
    return measure.name;
  });
  var range = data.reduce(function (draftRange, datum) {
    var _ref2 = draftRange,
      _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      currentMin = _ref3[0],
      currentMax = _ref3[1];
    var datumValues = eligibleMeasures.map(function (name) {
      return datum[name];
    });

    var accumulatedValue = datumValues.reduce(_add["default"], 0);
    var newMax = Math.max.apply(Math, (0, _toConsumableArray2["default"])(positioning === 'stacked' ? [accumulatedValue] : datumValues).concat([currentMax]));
    var newMin = Math.min.apply(Math, (0, _toConsumableArray2["default"])(positioning === 'stacked' ? [accumulatedValue] : datumValues).concat([currentMin]));
    return [newMin, newMax];
  }, [Infinity, -Infinity]);
  return range;
};
exports.getDataRange = getDataRange;
//# sourceMappingURL=getDataRange.js.map