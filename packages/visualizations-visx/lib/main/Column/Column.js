"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _xychart = require("@visx/xychart");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _XYLegend = require("../XYLegend");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _get = _interopRequireDefault(require("lodash/get"));
var _compact = _interopRequireDefault(require("lodash/compact"));
var _utils = require("../utils");
var _XYTooltip = require("../XYTooltip");
var _Grid = require("../Grid");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Column = function Column(_ref) {
  var data = _ref.data,
    config = _ref.config,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$height,
    width = _ref.width,
    fields = _ref.fields;
  var positioning = config.positioning,
    seriesList = config.series,
    legend = config.legend;

  var formattedData = (0, _utils.concatDimensions)(data, fields);
  var _useAxis = (0, _utils.useAxis)({
      config: config,
      data: formattedData,
      fields: fields
    }),
    XAxis = _useAxis.XAxis,
    YAxis = _useAxis.YAxis,
    chartMargin = _useAxis.chartMargin;
  var chartTheme = (0, _utils.useChartTheme)(seriesList);

  if (!(0, _utils.isValidChartData)(data, fields)) {
    return null;
  }
  var renderedColumns = (0, _compact["default"])(fields.measures.map(function (measure, i) {
    var series = (0, _isArray["default"])(seriesList) ? (0, _get["default"])(config, ['series', i]) : (0, _get["default"])(config, ['series', measure.name]);
    if (!series.visible) return undefined;
    return _react["default"].createElement(_xychart.BarSeries, {
      key: i,
      dataKey: measure.name,
      data: formattedData,
      xAccessor: function xAccessor(d) {
        return (0, _utils.getX)(d);
      },
      yAccessor: function yAccessor(d) {
        return (0, _utils.getY)(d, i);
      }
    });
  }));
  var domain = positioning === 'percent' ? [0, 1] : (0, _utils.getYAxisRange)({
    config: config,
    data: formattedData,
    fields: fields
  });
  var Y_SCALE = _objectSpread({
    type: 'linear'
  }, domain && {
    domain: domain,
    zero: false
  });
  return _react["default"].createElement(_xychart.DataProvider
  , {
    xScale: {
      type: 'band',
      paddingInner: 0.2
    },
    yScale: Y_SCALE,
    theme: chartTheme
  }, _react["default"].createElement(_visualizationsAdapters.VisWrapper, {
    legend: legend
  }, _react["default"].createElement(_xychart.XYChart, {
    margin: chartMargin,
    width: width,
    height: height
  }, _react["default"].createElement(XAxis, null), _react["default"].createElement(YAxis, null), _react["default"].createElement(_Grid.Grid, {
    config: config
  }), _react["default"].createElement(_XYTooltip.XYTooltip, {
    config: config,
    data: formattedData,
    fields: fields,
    showDatumGlyph: false,
    snapToDatum: false
  }), positioning === 'stacked' || positioning === 'percent' ? _react["default"].createElement(_xychart.BarStack, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, renderedColumns) : _react["default"].createElement(_xychart.BarGroup, null, renderedColumns)), _react["default"].createElement(_XYLegend.XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
exports.Column = Column;
//# sourceMappingURL=Column.js.map