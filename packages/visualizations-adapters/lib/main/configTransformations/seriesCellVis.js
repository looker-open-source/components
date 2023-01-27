"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesCellVis = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _get = _interopRequireDefault(require("lodash/get"));
var _excluded = ["series"],
  _excluded2 = ["cell_visualization"],
  _excluded3 = ["cell_visualization"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var setSeriesCellVisStatus = function setSeriesCellVisStatus(config) {
  var measureName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var i = arguments.length > 2 ? arguments[2] : undefined;
  var cellVisDefault = i === 0;
  var seriesBaseName = measureName.split('|')[0];
  var apiValue = (0, _get["default"])(config, ['series_cell_visualizations', seriesBaseName, 'is_active'], cellVisDefault);
  return apiValue;
};
var seriesCellVis = function seriesCellVis(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var buildArraySeries = function buildArraySeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = fields === null || fields === void 0 ? void 0 : fields.measures.map(function (_ref2, i) {
      var name = _ref2.name;
      var defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i);
      var _ref3 = (s === null || s === void 0 ? void 0 : s[i]) || {},
        _ref3$cell_visualizat = _ref3.cell_visualization,
        cell_visualization = _ref3$cell_visualizat === void 0 ? defaultSeriesCellValue : _ref3$cell_visualizat,
        restSeries = (0, _objectWithoutProperties2["default"])(_ref3, _excluded2);
      return _objectSpread({
        cell_visualization: cell_visualization
      }, restSeries);
    }, []);
    return arraySeries;
  };
  var buildNamedSeries = function buildNamedSeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var namedSeries = fields.measures.reduce(function (seriesConfig, _ref4, i) {
      var name = _ref4.name;
      var defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i);
      var _ref5 = (s === null || s === void 0 ? void 0 : s[name]) || {},
        _ref5$cell_visualizat = _ref5.cell_visualization,
        cell_visualization = _ref5$cell_visualizat === void 0 ? defaultSeriesCellValue : _ref5$cell_visualizat,
        restSeries = (0, _objectWithoutProperties2["default"])(_ref5, _excluded3);
      return _objectSpread(_objectSpread({}, seriesConfig), {}, (0, _defineProperty2["default"])({}, name, _objectSpread({
        cell_visualization: cell_visualization
      }, restSeries)));
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
exports.seriesCellVis = seriesCellVis;
//# sourceMappingURL=seriesCellVis.js.map