"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sparkline = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _shape = require("@visx/shape");
var _point = require("@visx/point");
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var chunkByNull = function chunkByNull(data) {
  return data.reduce(function (chunks, d) {
    if (d === null) {
      chunks.push([]);
    } else {
      chunks[chunks.length - 1].push(d);
    }
    return chunks;
  }, [[]]);
};
var generatePoints = function generatePoints(_ref) {
  var data = _ref.data,
    chartDimensions = _ref.chartDimensions,
    yRange = _ref.yRange,
    lineWidth = _ref.lineWidth;
  var dataChunks = chunkByNull(data);
  var _yRange = (0, _slicedToArray2["default"])(yRange, 2),
    yMin = _yRange[0],
    yMax = _yRange[1];
  var chartPadding = lineWidth / 2;
  var chartWidth = chartDimensions.width - chartPadding * 2;
  var chartHeight = chartDimensions.height - chartPadding * 2;
  var pointSpacing = chartWidth / Math.max(data.length - 1, 1);
  var valueRange = yMax - yMin;
  return dataChunks.map(function (chunk, chunkId) {
    var prevChunks = dataChunks.slice(0, chunkId);
    var countFrom = prevChunks.flatMap(function (c) {
      return c;
    }).length;
    return chunk.map(function (d, i) {
      return new _point.Point({
        x: (i + countFrom + chunkId) * pointSpacing + chartPadding,
        y: chartHeight - (Number(d) - yMin) / valueRange * chartHeight + chartPadding
      });
    });
  });
};
var Sparkline = function Sparkline(_ref2) {
  var _data$reduce, _config$y_axis, _config$y_axis$;
  var _ref2$data = _ref2.data,
    data = _ref2$data === void 0 ? [] : _ref2$data,
    config = _ref2.config,
    fields = _ref2.fields,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref2$height,
    width = _ref2.width;
  var _ref3 = config || {},
    _ref3$series = _ref3.series,
    series = _ref3$series === void 0 ? {} : _ref3$series;

  var firstMeasure = fields.measures[0];
  var firstSeries = Array.isArray(series) ? series[0] : series[firstMeasure.name || ''];
  var themeContext = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    wrapperRef = _useState2[0],
    setWrapperRef = _useState2[1];
  var _useMeasuredElement = (0, _components.useMeasuredElement)(wrapperRef),
    _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 2),
    wrapperRect = _useMeasuredElement2[0],
    refreshRect = _useMeasuredElement2[1];
  (0, _react.useEffect)(function () {
    refreshRect();
  }, [wrapperRef, refreshRect]);
  var _ref4 = firstSeries || {},
    _ref4$line_width = _ref4.line_width,
    lineWidth = _ref4$line_width === void 0 ? 3 : _ref4$line_width;
  var _ref5 = (_data$reduce = data === null || data === void 0 ? void 0 : data.reduce(function (_ref6, d) {
      var dataSet = _ref6.dataSet,
        dataMin = _ref6.dataMin,
        dataMax = _ref6.dataMax;
      var val = d[firstMeasure.name];
      return {
        dataSet: [].concat((0, _toConsumableArray2["default"])(dataSet), [val]),
        dataMin: (0, _visualizationsAdapters.isNumeric)(val) ? Math.min(dataMin, Number(val)) : dataMin,
        dataMax: (0, _visualizationsAdapters.isNumeric)(val) ? Math.max(dataMax, Number(val)) : dataMax
      };
    }, {
      dataSet: [],
      dataMin: Infinity,
      dataMax: -Infinity
    })) !== null && _data$reduce !== void 0 ? _data$reduce : {},
    dataSet = _ref5.dataSet,
    dataMin = _ref5.dataMin,
    dataMax = _ref5.dataMax;
  var _ref7 = (config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.range) || [],
    _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
    configMin = _ref8[0],
    configMax = _ref8[1];
  var chartPoints = generatePoints({
    chartDimensions: {
      width: width || wrapperRect.width,
      height: height
    },
    data: dataSet || [],
    lineWidth: lineWidth || 1,
    yRange: [(0, _visualizationsAdapters.isNumeric)(configMin) ? configMin : dataMin, (0, _visualizationsAdapters.isNumeric)(configMax) ? configMax : dataMax]
  });
  if (!data || data.length === 0) {
    return null;
  }
  return _react["default"].createElement(_visualizationsAdapters.VisWrapper, {
    ref: setWrapperRef
  }, _react["default"].createElement("svg", {
    width: width,
    height: height,
    "data-testid": "sparkline-chart"
  }, chartPoints.length && chartPoints.map(function (chunk, i) {
    return _react["default"].createElement(_shape.LinePath, {
      key: i,
      data: chunk,
      stroke: (0, _utils.getSeriesColor)(firstSeries, themeContext),
      strokeWidth: lineWidth,
      x: function x(d) {
        return d.x || 0;
      },
      y: function y(d) {
        return d.y || 0;
      }
    });
  })));
};
exports.Sparkline = Sparkline;
//# sourceMappingURL=Sparkline.js.map