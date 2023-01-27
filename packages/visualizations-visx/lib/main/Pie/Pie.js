"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pie = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Pie = _interopRequireDefault(require("@visx/shape/lib/shapes/Pie"));
var _scale = require("@visx/scale");
var _group = require("@visx/group");
var _tooltip = require("@visx/tooltip");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _useLabelWidth = require("./useLabelWidth");
var _getLabelContent = require("./getLabelContent");
var _getChartGeometry2 = require("./getChartGeometry");
var _PieTooltip = require("./PieTooltip");
var _PieArc = require("./PieArc");
var _PieLabel = require("./PieLabel");
var _PieLegend = require("./PieLegend");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var _excluded = ["showTooltip", "hideTooltip"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var generateColorScale = function generateColorScale(data, seriesConfig, dimension) {
  var dataKey = dimension.name;
  var range = (0, _isArray["default"])(seriesConfig) ? seriesConfig.map(function (s) {
    return s === null || s === void 0 ? void 0 : s.color;
  }) : data.map(function (d) {
    var _seriesConfig$d$dataK;
    return (_seriesConfig$d$dataK = seriesConfig[d[dataKey]]) === null || _seriesConfig$d$dataK === void 0 ? void 0 : _seriesConfig$d$dataK.color;
  });
  return (0, _scale.scaleOrdinal)({
    domain: data.map(function (d) {
      return d[dataKey];
    }),
    range: range
  });
};
var Pie = function Pie(_ref) {
  var data = _ref.data,
    config = _ref.config,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? _visualizationsAdapters.DEFAULT_HEIGHT : _ref$width,
    fields = _ref.fields;
  var _useTooltip = (0, _tooltip.useTooltip)(),
    showTooltip = _useTooltip.showTooltip,
    hideTooltip = _useTooltip.hideTooltip,
    tooltipProps = (0, _objectWithoutProperties2["default"])(_useTooltip, _excluded);
  var series = config.series,
    legend = config.legend,
    _config$tooltips = config.tooltips,
    tooltips = _config$tooltips === void 0 ? true : _config$tooltips;
  var _ref2 = legend || {},
    _ref2$position = _ref2.position,
    legendPosition = _ref2$position === void 0 ? 'right' : _ref2$position,
    legendType = _ref2.type,
    legendWidth = _ref2.width;

  var limitedData = data.slice(0, 50);
  var firstMeasure = fields.measures[0] || {};
  var firstDimension = fields.dimensions[0] || {};

  var keyValData = Object.fromEntries(limitedData.map(function (d) {
    return [d[firstDimension.name], Number(d[firstMeasure.name])];
  }));

  var measureTotal = Number(Object.values(keyValData).reduce(function (total, v) {
    return Number(total) + Number(v);
  }, 0));
  var labelWidth = (0, _useLabelWidth.useLabelWidth)(measureTotal, keyValData, legend);
  var _getChartGeometry = (0, _getChartGeometry2.getChartGeometry)({
      legendType: legend ? legend.type : undefined,
      width: width,
      height: height,
      labelWidth: labelWidth
    }),
    canvasW = _getChartGeometry.canvasW,
    canvasH = _getChartGeometry.canvasH,
    pieCenterX = _getChartGeometry.pieCenterX,
    pieCenterY = _getChartGeometry.pieCenterY,
    outerRadius = _getChartGeometry.outerRadius;

  var colorScale = generateColorScale(limitedData, series, firstDimension);
  var mouseOutTimer = 0;
  var handleMouseOver = function handleMouseOver(_ref3, coords) {
    var pieDatum = _ref3.data;
    window.clearTimeout(mouseOutTimer);
    if (coords && tooltips) {
      showTooltip({
        tooltipData: pieDatum,
        tooltipTop: coords.y,
        tooltipLeft: coords.x
      });
    }
  };
  var handleMouseOut = function handleMouseOut() {
    mouseOutTimer = window.setTimeout(function () {
      hideTooltip();
    });
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(PieGrid, {
    legendType: legend ? legend.type : undefined
  }, _react["default"].createElement(PieChart, {
    legendPosition: legendPosition,
    width: canvasW,
    height: canvasH
  }, _react["default"].createElement(_group.Group, {
    top: pieCenterY,
    left: pieCenterX
  }, _react["default"].createElement(_Pie["default"], {
    data: limitedData,
    pieValue: function pieValue(d) {
      return d[firstMeasure.name];
    },
    pieSortValues: function pieSortValues() {
      return 1;
    },
    outerRadius: outerRadius
  }, function (_ref4) {
    var arcs = _ref4.arcs,
      path = _ref4.path;
    return arcs.map(function (arc, i) {
      var dimensonValue = arc.data[firstDimension.name];
      var arcDatum = (0, _pick["default"])(keyValData, dimensonValue);
      var datumColor = colorScale(dimensonValue) || '#000000';
      return _react["default"].createElement(_react.Fragment, {
        key: i
      }, _react["default"].createElement(_PieArc.PieArc, {
        arc: arc,
        path: path,
        key: i,
        datumColor: datumColor,
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
        renderTooltip: tooltips
      }), legendType === 'labels' && _react["default"].createElement(_PieLabel.PieLabel, {
        arc: arc,
        outerRadius: outerRadius,
        labelContent: (0, _getLabelContent.getLabelContent)(measureTotal, arcDatum, legend),
        datumColor: datumColor
      }));
    });
  }))), legend && legendType === 'legend' && _react["default"].createElement(LegendWrapper, {
    legendPosition: legendPosition
  }, _react["default"].createElement(_PieLegend.PieLegend, {
    legendConfig: legend,
    scale: colorScale,
    data: keyValData,
    measureTotal: measureTotal,
    height: canvasH,
    width: legendWidth || canvasW
  }))), _react["default"].createElement(_PieTooltip.PieTooltip, (0, _extends2["default"])({}, tooltipProps, {
    measure: firstMeasure,
    dimension: firstDimension
  })));
};
exports.Pie = Pie;
var PieGrid = _styledComponents["default"].div.withConfig({
  displayName: "Pie__PieGrid",
  componentId: "sc-98dgxh-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: grid;\n  grid-column-gap: ", ";\n  grid-template-areas:\n    'top top'\n    'left right'\n    'bottom bottom';\n  grid-template-columns: fit-content(250px) 1fr;\n"])), function (_ref5) {
  var theme = _ref5.theme,
    legendType = _ref5.legendType;
  return legendType === 'legend' ? theme.space.medium : 0;
});
var PieChart = _styledComponents["default"].svg.withConfig({
  displayName: "Pie__PieChart",
  componentId: "sc-98dgxh-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref6) {
  var legendPosition = _ref6.legendPosition;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-area: ", ";\n  "])), legendPosition === "left" ? "right" : "left");
});
var LegendWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Pie__LegendWrapper",
  componentId: "sc-98dgxh-2"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref7) {
  var legendPosition = _ref7.legendPosition;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-area: ", ";\n  "])), legendPosition);
});
//# sourceMappingURL=Pie.js.map