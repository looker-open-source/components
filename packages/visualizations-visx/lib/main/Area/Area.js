"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Area = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _xychart = require("@visx/xychart");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _XYLegend = require("../XYLegend");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _get = _interopRequireDefault(require("lodash/get"));
var _utils = require("../utils");
var _XYTooltip = require("../XYTooltip");
var _Marker = require("../Marker");
var _Grid = require("../Grid");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var NoopComponent = function NoopComponent(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, children);
};
var Area = function Area(_ref2) {
  var data = _ref2.data,
    config = _ref2.config,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref2$height,
    width = _ref2.width,
    fields = _ref2.fields;
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
  var areas = fields.measures.map(function (measure, i) {
    var series = (0, _isArray["default"])(seriesList) ? (0, _get["default"])(config, ['series', i]) : (0, _get["default"])(config, ['series', measure.name]);
    if (!series.visible) return _react["default"].createElement(_react.Fragment, {
      key: i
    });
    var style = series.style,
      line_width = series.line_width,
      shape = series.shape;
    var id = "marker-".concat(shape, "-").concat(i);
    return _react["default"].createElement(_react.Fragment, {
      key: id
    }, style !== 'none' && _react["default"].createElement(_Marker.Marker, {
      series: series,
      id: id
    }), _react["default"].createElement(_xychart.AreaSeries, {
      key: id,
      dataKey: measure.name,
      data: (0, _utils.dimensionToDate)(formattedData, fields),
      lineProps: {
        strokeWidth: line_width,
        markerMid: "url(#".concat(id, ")"),
        markerStart: "url(#".concat(id, ")"),
        markerEnd: "url(#".concat(id, ")")
      },
      fillOpacity: 0.4,
      xAccessor: function xAccessor(d) {
        return (0, _utils.getX)(d);
      },
      yAccessor: function yAccessor(d) {
        return (0, _utils.getY)(d, i);
      }
    }));
  });
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
  var PositioningWrapper = positioning === 'stacked' || positioning === 'percent' ? _xychart.AreaStack : NoopComponent;
  return _react["default"].createElement(_xychart.DataProvider
  , {
    xScale: {
      type: (0, _utils.isDateQuery)(fields) ? 'time' : 'band'
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
    fields: fields
  }), _react["default"].createElement(PositioningWrapper, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, areas)), _react["default"].createElement(_XYLegend.XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
exports.Area = Area;
//# sourceMappingURL=Area.js.map