"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XYLegend = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _xychart = require("@visx/xychart");
var _legend = require("@visx/legend");
var _partial = _interopRequireDefault(require("lodash/partial"));
var _utils = require("../utils");
var _excluded = ["direction"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_LEGEND_WIDTH = 200;
var XYLegend = function XYLegend(_ref) {
  var chartWidth = _ref.chartWidth,
    config = _ref.config,
    fields = _ref.fields;
  var _useContext = (0, _react.useContext)(_xychart.DataContext),
    _useContext$colorScal = _useContext.colorScale,
    colorScale = _useContext$colorScal === void 0 ? {} : _useContext$colorScal,
    visxTheme = _useContext.theme,
    margin = _useContext.margin;
  var _useTheme = (0, _styledComponents.useTheme)(),
    _useTheme$space = _useTheme.space,
    xsmall = _useTheme$space.xsmall,
    small = _useTheme$space.small;
  var legend = config.legend;

  if (!legend) {
    return _react["default"].createElement(_react["default"].Fragment, null);
  }
  var legendWidth = legend.width || DEFAULT_LEGEND_WIDTH;

  var yAxisSpacer = legend.position === 'left' || legend.position === 'right' ? undefined : margin === null || margin === void 0 ? void 0 : margin.left;
  var _bottom$top$left$righ = {
      bottom: {
        direction: 'row',
        marginLeft: yAxisSpacer,
        marginTop: small,
        width: "calc(".concat(chartWidth ? "".concat(chartWidth, "px") : '100%', " - ").concat(yAxisSpacer, "px)")
      },
      top: {
        direction: 'row',
        marginLeft: yAxisSpacer,
        marginBottom: small,
        width: "calc(".concat(chartWidth ? "".concat(chartWidth, "px") : '100%', " - ").concat(yAxisSpacer, "px)")
      },
      left: {
        direction: 'column',
        width: legendWidth
      },
      right: {
        direction: 'column',
        width: legendWidth
      }
    }[legend.position],
    direction = _bottom$top$left$righ.direction,
    legendStyle = (0, _objectWithoutProperties2["default"])(_bottom$top$left$righ, _excluded);
  return _react["default"].createElement(_legend.LegendOrdinal, {
    direction: direction,
    itemMargin: "0 ".concat(small, " ").concat(xsmall, " ").concat(small),
    labelFormat: (0, _partial["default"])(_utils.seriesLabelFormatter, fields, config),
    style: _objectSpread({
      color: visxTheme === null || visxTheme === void 0 ? void 0 : visxTheme.svgLabelBig.fill,
      display: 'flex',
      flexShrink: 0,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }, legendStyle),
    scale: colorScale,
    shape: "line"
  });
};
exports.XYLegend = XYLegend;
//# sourceMappingURL=XYLegend.js.map