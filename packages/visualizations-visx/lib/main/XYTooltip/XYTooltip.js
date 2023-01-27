"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipStyles = exports.XYTooltip = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _xychart = require("@visx/xychart");
var _components = require("@looker/components");
var _get = _interopRequireDefault(require("lodash/get"));
var _Glyph = require("../Glyph");
var _utils = require("../utils");
var _DLGroup = require("../DLGroup");
var _numeral = _interopRequireDefault(require("numeral"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var tooltipStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  padding: ", ";\n  pointer-events: none; /* Prevents mouse from falling onto tooltip and interrupting horizontal hover flow on charts */\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.inverse;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.inverseOn;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fonts.body;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSizes.xsmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.u3;
});
exports.tooltipStyles = tooltipStyles;
var XYTooltip = (0, _styledComponents["default"])(function (_ref7) {
  var className = _ref7.className,
    config = _ref7.config,
    data = _ref7.data,
    fields = _ref7.fields,
    _ref7$snapToDatum = _ref7.snapToDatum,
    snapToDatum = _ref7$snapToDatum === void 0 ? true : _ref7$snapToDatum,
    _ref7$showDatumGlyph = _ref7.showDatumGlyph,
    showDatumGlyph = _ref7$showDatumGlyph === void 0 ? true : _ref7$showDatumGlyph;
  var _useTranslation = (0, _utils.useTranslation)('XYTooltip'),
    t = _useTranslation.t;
  var theme = (0, _styledComponents.useTheme)();
  var tooltips = config.tooltips,
    series = config.series;
  if (!tooltips) {
    return _react["default"].createElement(_react["default"].Fragment, null);
  }
  var renderTooltip = function renderTooltip(_ref8) {
    var _tooltipData$nearestD, _tooltipData$nearestD2;
    var tooltipData = _ref8.tooltipData;
    var nearestDatumMeasureName = (tooltipData === null || tooltipData === void 0 ? void 0 : (_tooltipData$nearestD = tooltipData.nearestDatum) === null || _tooltipData$nearestD === void 0 ? void 0 : _tooltipData$nearestD.key) || '';
    var nearestDatumIndex = (tooltipData === null || tooltipData === void 0 ? void 0 : (_tooltipData$nearestD2 = tooltipData.nearestDatum) === null || _tooltipData$nearestD2 === void 0 ? void 0 : _tooltipData$nearestD2.index) || 0;
    var datum = data[nearestDatumIndex];
    var nearestSeries = (0, _visualizationsAdapters.pickSeriesByName)(fields, config, nearestDatumMeasureName);
    var dimensionLabel = fields.dimensions.length === 1 ? fields.dimensions[0].label_short : '';
    var valueFormatted = (0, _numeral["default"])(datum[nearestDatumMeasureName]).format(nearestSeries.value_format);
    var size_by = nearestSeries.size_by;
    var sizeBySeries = size_by ? (0, _get["default"])(series, size_by) : {};
    var sizeByValueFormatted = (0, _numeral["default"])(datum[nearestSeries.size_by || '']).format(sizeBySeries.value_format);
    return _react["default"].createElement(_components.TooltipContent, null, _react["default"].createElement(StyledDL, null, _react["default"].createElement(_components.SpaceVertical, {
      gap: "u3"
    }, _react["default"].createElement(_DLGroup.DLGroup, {
      label: dimensionLabel,
      value: datum.dimension
    }), _react["default"].createElement(_DLGroup.DLGroup, {
      label: (0, _utils.seriesLabelFormatter)(fields, config, nearestDatumMeasureName),
      value: valueFormatted
    }), nearestSeries.size_by && _react["default"].createElement(_DLGroup.DLGroup, {
      preface: t('Points sized by'),
      label: (0, _utils.seriesLabelFormatter)(fields, config, nearestSeries.size_by),
      value: sizeByValueFormatted
    }))));
  };
  var glyphSize = function glyphSize() {
    var sizeByData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var line_width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var size_by = arguments.length > 2 ? arguments[2] : undefined;
    var defaultSize = (0, _utils.getDefaultGlyphSize)(line_width) + 20 + line_width * 4;
    if (size_by) {
      var sizeByMin = (0, _visualizationsAdapters.getSeriesMin)(size_by, data);
      var sizeByMax = (0, _visualizationsAdapters.getSeriesMax)(size_by, data);
      return sizeByMin !== sizeByMax ? (0, _utils.getRelativeGlyphSize)(sizeByData, sizeByMin, sizeByMax) : defaultSize;
    }
    return defaultSize;
  };
  var styleObj = function styleObj(size, size_by) {
    var scaleValue = Math.round(-0.001 * size + 20) / 100 + 0.9;
    return _objectSpread({
      stroke: theme.colors.background,
      transform: "scale(".concat(scaleValue, ", ").concat(scaleValue, ")")
    }, size_by ? {
      opacity: "0.5",
      filter: "drop-shadow(1px 1px 3px rgb(0 0 0 / 0.5))"
    } : {});
  };
  return _react["default"].createElement(_xychart.Tooltip, {
    className: className,
    detectBounds: true,
    renderTooltip: renderTooltip,
    showDatumGlyph: showDatumGlyph,
    snapTooltipToDatumX: snapToDatum,
    snapTooltipToDatumY: snapToDatum,
    unstyled: true,
    applyPositionStyle: true,
    renderGlyph: function renderGlyph(_ref9) {
      var color = _ref9.color,
        key = _ref9.key,
        datum = _ref9.datum;
      var nearestSeries = (0, _visualizationsAdapters.pickSeriesByName)(fields, config, key);
      var _nearestSeries$line_w = nearestSeries.line_width,
        line_width = _nearestSeries$line_w === void 0 ? 1 : _nearestSeries$line_w,
        size_by = nearestSeries.size_by;
      var size = glyphSize((0, _get["default"])(datum, size_by || ''), line_width, size_by);
      var style = styleObj(size, size_by);
      return _react["default"].createElement(_Glyph.Glyph, {
        series: _objectSpread(_objectSpread({}, nearestSeries), {}, {
          line_width: 3
        }),
        top: 0,
        left: 0,
        size: size,
        fill: color,
        styleObj: style
      });
    }
  });
}).withConfig({
  displayName: "XYTooltip",
  componentId: "sc-48579u-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), tooltipStyles);
exports.XYTooltip = XYTooltip;
var StyledDL = _styledComponents["default"].dl.withConfig({
  displayName: "XYTooltip__StyledDL",
  componentId: "sc-48579u-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n"])));
//# sourceMappingURL=XYTooltip.js.map