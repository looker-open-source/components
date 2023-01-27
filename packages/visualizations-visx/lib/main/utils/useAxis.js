"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAxis = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _react = _interopRequireWildcard(require("react"));
var _xychart = require("@visx/xychart");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Axis = require("../Axis");
var _ = require(".");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TICK_LABEL_TO_AXIS_LABEL_SPACER = 10;

var useAxis = function useAxis(_ref) {
  var _config$x_axis, _config$x_axis$, _config$y_axis, _config$y_axis$;
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var visxTheme = (0, _react.useContext)(_xychart.ThemeContext);

  var xAxisLabels = data.map(function (datum) {
    return (0, _.formatDateLabel)({
      dateString: datum.dimension,
      fields: fields
    }).slice(0, _Axis.MAX_TICK_LABEL_LENGTH);
  });
  var xAxisLongestLabel = (0, _visualizationsAdapters.pickLongestLabel)(xAxisLabels);
  var _useMeasuredText = (0, _visualizationsAdapters.useMeasuredText)(xAxisLongestLabel, {
      fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
    }),
    xAxisLongestLabelHeight = _useMeasuredText.height,
    xAxisLongestLabelWidth = _useMeasuredText.width;
  var averageLabelLength = xAxisLabels.join('').length / xAxisLabels.length;
  var renderXAxisTicks = config === null || config === void 0 ? void 0 : (_config$x_axis = config.x_axis) === null || _config$x_axis === void 0 ? void 0 : (_config$x_axis$ = _config$x_axis[0]) === null || _config$x_axis$ === void 0 ? void 0 : _config$x_axis$.values;
  var hasRotatedXAxisLabels = renderXAxisTicks && averageLabelLength > 10;
  var angledLabelHypotenuse = Math.sqrt(xAxisLongestLabelWidth * xAxisLongestLabelWidth / 2) + TICK_LABEL_TO_AXIS_LABEL_SPACER;
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
  var xAxisValueFormat = (0, _utils.getXAxisFormat)(fields);
  var XAxisWrapped = function XAxisWrapped() {
    var _config$x_axis2, _config$x_axis2$, _config$x_axis3, _config$x_axis3$;
    return (0, _.isDateQuery)(fields) && config.type !== 'column' ? _react["default"].createElement(_Axis.XAxisDate, {
      label: (config === null || config === void 0 ? void 0 : (_config$x_axis2 = config.x_axis) === null || _config$x_axis2 === void 0 ? void 0 : (_config$x_axis2$ = _config$x_axis2[0]) === null || _config$x_axis2$ === void 0 ? void 0 : _config$x_axis2$.label) || undefined,
      showTicks: renderXAxisTicks
    }) : _react["default"].createElement(_Axis.XAxis, (0, _extends2["default"])({
      showTicks: renderXAxisTicks,
      fields: fields,
      label: (config === null || config === void 0 ? void 0 : (_config$x_axis3 = config.x_axis) === null || _config$x_axis3 === void 0 ? void 0 : (_config$x_axis3$ = _config$x_axis3[0]) === null || _config$x_axis3$ === void 0 ? void 0 : _config$x_axis3$.label) || undefined,
      valueFormat: xAxisValueFormat
    }, X_AXIS_STYLE));
  };
  var renderYAxisTicks = config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.values;

  var yAxisLongestLabel;
  if (fields.measures.every(function (measure) {
    return measure.is_numeric;
  })) {
    var dataRangeStrings = (0, _.getYAxisRange)({
      config: config,
      data: data,
      fields: fields
    }).map(function (d) {
      return String(Math.round(d));
    });
    yAxisLongestLabel = (0, _visualizationsAdapters.pickLongestLabel)(dataRangeStrings);
  } else {
    var measureNames = (0, _visualizationsAdapters.getVisibleMeasureNames)(fields, config);
    var measureValues = data.flatMap(function (d) {
      var datumMeasureValues = Object.values((0, _pick["default"])(d, measureNames));
      return datumMeasureValues.map(function (value) {
        return String(value);
      });
    });
    yAxisLongestLabel = (0, _visualizationsAdapters.pickLongestLabel)(measureValues);
  }
  var _useMeasuredText2 = (0, _visualizationsAdapters.useMeasuredText)(yAxisLongestLabel, {
      fontFamily: visxTheme.axisStyles.y.left.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.y.left.tickLabel.fontSize || '1rem'
    }),
    yAxisLongestLabelWidth = _useMeasuredText2.width;

  var yAxisLabelDx = renderYAxisTicks ? -yAxisLongestLabelWidth - 10 : -10;
  var yAxisValueFormat = (0, _utils.getYAxisFormat)(config);
  var YAxisWrapped = function YAxisWrapped() {
    var _config$y_axis2, _config$y_axis2$;
    return _react["default"].createElement(_Axis.YAxis, {
      showTicks: renderYAxisTicks,
      fields: fields,
      label: (config === null || config === void 0 ? void 0 : (_config$y_axis2 = config.y_axis) === null || _config$y_axis2 === void 0 ? void 0 : (_config$y_axis2$ = _config$y_axis2[0]) === null || _config$y_axis2$ === void 0 ? void 0 : _config$y_axis2$.label) || undefined,
      labelDx: yAxisLabelDx,
      valueFormat: yAxisValueFormat
    });
  };
  var yAxisLabelWidth = renderYAxisTicks ? yAxisLongestLabelWidth + _visualizationsAdapters.DEFAULT_MARGIN : _visualizationsAdapters.DEFAULT_MARGIN;
  var chartMarginBottom = hasRotatedXAxisLabels ? angledLabelHypotenuse + _visualizationsAdapters.DEFAULT_MARGIN : _visualizationsAdapters.DEFAULT_MARGIN;
  var chartMarginLeft = hasRotatedXAxisLabels ? Math.max(angledLabelHypotenuse, yAxisLabelWidth) : yAxisLabelWidth;
  var chartMargin = {
    top: 0,
    right: 0,
    bottom: chartMarginBottom,
    left: chartMarginLeft
  };
  return {
    XAxis: XAxisWrapped,
    YAxis: YAxisWrapped,
    chartMargin: chartMargin
  };
};
exports.useAxis = useAxis;
//# sourceMappingURL=useAxis.js.map