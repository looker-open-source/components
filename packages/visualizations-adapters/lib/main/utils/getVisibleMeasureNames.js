"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisibleMeasureNames = void 0;
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _ = require(".");

var getVisibleMeasureNames = function getVisibleMeasureNames() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_EMPTY_FIELDS;
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var _fields$measures = fields.measures,
    measures = _fields$measures === void 0 ? [] : _fields$measures;
  var visibleMeasures = measures.filter(function (measure, index) {
    if (config.series) {
      var _config$series, _config$series$index, _config$series2, _config$series2$measu;
      return (0, _isArray["default"])(config.series) ? config === null || config === void 0 ? void 0 : (_config$series = config.series) === null || _config$series === void 0 ? void 0 : (_config$series$index = _config$series[index]) === null || _config$series$index === void 0 ? void 0 : _config$series$index.visible : config === null || config === void 0 ? void 0 : (_config$series2 = config.series) === null || _config$series2 === void 0 ? void 0 : (_config$series2$measu = _config$series2[measure.name]) === null || _config$series2$measu === void 0 ? void 0 : _config$series2$measu.visible;
    }

    return true;
  });
  return visibleMeasures.map(function (measure) {
    return measure.name;
  });
};
exports.getVisibleMeasureNames = getVisibleMeasureNames;
//# sourceMappingURL=getVisibleMeasureNames.js.map