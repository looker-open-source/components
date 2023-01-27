"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYAxisRange = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");

var getYAxisRange = function getYAxisRange(_ref) {
  var _config$y_axis, _config$y_axis$;
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _ref2 = (config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.range) || [],
    _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
    _ref3$ = _ref3[0],
    configMin = _ref3$ === void 0 ? 'auto' : _ref3$,
    _ref3$2 = _ref3[1],
    configMax = _ref3$2 === void 0 ? 'auto' : _ref3$2;
  var _getDataRange = (0, _visualizationsAdapters.getDataRange)({
      config: config,
      data: data,
      fields: fields
    }),
    _getDataRange2 = (0, _slicedToArray2["default"])(_getDataRange, 2),
    dataMin = _getDataRange2[0],
    dataMax = _getDataRange2[1];
  var min = configMin === 'auto' ? Math.min(0, Math.floor(dataMin)) : Number(configMin);
  var max = configMax === 'auto' ? Math.max(0, Math.ceil(dataMax)) : Number(configMax);
  return [min, max];
};
exports.getYAxisRange = getYAxisRange;
//# sourceMappingURL=getYAxisRange.js.map