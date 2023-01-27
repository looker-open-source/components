"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bar = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _xychart = require("@visx/xychart");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _XYLegend = require("../XYLegend");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _get = _interopRequireDefault(require("lodash/get"));
var _compact = _interopRequireDefault(require("lodash/compact"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _Axis = require("../Axis");
var _utils = require("../utils");
var _XYTooltip = require("../XYTooltip");
var _Grid = require("../Grid");
var _numeral = _interopRequireDefault(require("numeral"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Bar = function Bar(_ref) {
  var _config$x_axis, _config$y_axis;
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
  var chartTheme = (0, _utils.useChartTheme)(seriesList);
  var visxTheme = (0, _react.useContext)(_xychart.ThemeContext);
  var yAxisLabels = formattedData.map(function (datum) {
    return (0, _utils.formatDateLabel)({
      dateString: datum.dimension,
      fields: fields
    });
  });
  var yAxisLongestLabel = (0, _visualizationsAdapters.pickLongestLabel)(yAxisLabels);
  var _useMeasuredText = (0, _visualizationsAdapters.useMeasuredText)(yAxisLongestLabel, {
      fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
    }),
    yAxisLongestLabelWidth = _useMeasuredText.width;

  var yAxisConfig = config === null || config === void 0 ? void 0 : (_config$x_axis = config.x_axis) === null || _config$x_axis === void 0 ? void 0 : _config$x_axis[0];
  var yAxisValueFormat = (0, _utils.getXAxisFormat)(fields);

  var yAxisLabelDx = yAxisConfig !== null && yAxisConfig !== void 0 && yAxisConfig.values ? -yAxisLongestLabelWidth - 10 : -10;

  var xAxisConfig = config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : _config$y_axis[0];
  var xAxisValueFormat = (0, _utils.getYAxisFormat)(config);

  var measureNames = (0, _visualizationsAdapters.getVisibleMeasureNames)(fields, config);
  var measureValues = data.flatMap(function (d) {
    var datumMeasureValues = Object.values((0, _pick["default"])(d, measureNames));
    return datumMeasureValues.map(function (value) {
      return (0, _numeral["default"])(value).format(xAxisValueFormat);
    });
  });
  var xAxisLongestLabel = (0, _visualizationsAdapters.pickLongestLabel)(measureValues);
  var _useMeasuredText2 = (0, _visualizationsAdapters.useMeasuredText)(xAxisLongestLabel, {
      fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
    }),
    xAxisLongestLabelHeight = _useMeasuredText2.height,
    xAxisLongestLabelWidth = _useMeasuredText2.width;
  var averageMeasureValueLength = measureValues.join('').length / measureValues.length;
  var hasRotatedXAxisLabels = (xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.values) && averageMeasureValueLength > 10;
  var angledLabelHypotenuse = Math.sqrt(xAxisLongestLabelWidth * xAxisLongestLabelWidth / 2);
  var X_AXIS_STYLE = hasRotatedXAxisLabels ? {
    labelDy: angledLabelHypotenuse,
    tickAngle: -45,
    tickSpace: xAxisLongestLabelHeight * 2,
    tickTextAnchor: 'end'
  } : {
    labelDy: 0,
    tickAngle: 0,
    tickSpace: xAxisLongestLabelWidth + _visualizationsAdapters.DEFAULT_MARGIN,
    tickTextAnchor: 'inherit'
  };

  if (!(0, _utils.isValidChartData)(data, fields)) {
    return null;
  }
  var domain = positioning === 'percent' ? [0, 1] : (0, _utils.getYAxisRange)({
    config: config,
    data: formattedData,
    fields: fields
  });
  var X_SCALE = _objectSpread({
    type: 'linear'
  }, domain && {
    domain: domain,
    zero: false
  });
  var chartMarginBottom = hasRotatedXAxisLabels ? angledLabelHypotenuse + _visualizationsAdapters.DEFAULT_MARGIN : _visualizationsAdapters.DEFAULT_MARGIN;
  var chartMargin = {
    right: 0,
    top: 0,
    bottom: chartMarginBottom,
    left: yAxisConfig !== null && yAxisConfig !== void 0 && yAxisConfig.values ? yAxisLongestLabelWidth + _visualizationsAdapters.DEFAULT_MARGIN : _visualizationsAdapters.DEFAULT_MARGIN
  };
  var renderedBars = (0, _compact["default"])(fields.measures.map(function (measure, i) {
    var series = (0, _isArray["default"])(seriesList) ? (0, _get["default"])(config, ['series', i]) : (0, _get["default"])(config, ['series', measure.name]);
    if (!series.visible) return undefined;
    return _react["default"].createElement(_xychart.BarSeries, {
      key: i,
      dataKey: measure.name,
      data: formattedData,
      xAccessor: function xAccessor(d) {
        return (0, _utils.getY)(d, i);
      },
      yAccessor: function yAccessor(d) {
        return (0, _utils.getX)(d);
      }
    });
  }));
  return _react["default"].createElement(_xychart.DataProvider
  , {
    xScale: X_SCALE,
    yScale: {
      type: 'band',
      paddingInner: 0.2
    },
    theme: chartTheme
  }, _react["default"].createElement(_visualizationsAdapters.VisWrapper, {
    legend: legend
  }, _react["default"].createElement(_xychart.XYChart, {
    margin: chartMargin,
    width: width,
    height: height
  }, _react["default"].createElement(_Axis.XAxis, (0, _extends2["default"])({
    showTicks: xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.values,
    fields: fields,
    label: (xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.label) || '',
    valueFormat: xAxisValueFormat
  }, X_AXIS_STYLE)), _react["default"].createElement(_Axis.YAxis, {
    showTicks: yAxisConfig === null || yAxisConfig === void 0 ? void 0 : yAxisConfig.values,
    fields: fields,
    label: (yAxisConfig === null || yAxisConfig === void 0 ? void 0 : yAxisConfig.label) || '',
    labelDx: yAxisLabelDx,
    valueFormat: yAxisValueFormat
  }), _react["default"].createElement(_Grid.Grid, {
    config: config
  }), _react["default"].createElement(_XYTooltip.XYTooltip, {
    config: config,
    data: formattedData,
    fields: fields,
    showDatumGlyph: false,
    snapToDatum: false
  }), positioning === 'stacked' || positioning === 'percent' ? _react["default"].createElement(_xychart.BarStack, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, renderedBars) : _react["default"].createElement(_xychart.BarGroup, null, renderedBars)), _react["default"].createElement(_XYLegend.XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
exports.Bar = Bar;
//# sourceMappingURL=Bar.js.map