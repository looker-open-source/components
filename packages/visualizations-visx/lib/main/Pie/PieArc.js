"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieArc = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _d3Hsv = require("d3-hsv");
var _event = require("@visx/event");
var _styledComponents = require("styled-components");
var _pieConstants = require("./pieConstants");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var PieArc = function PieArc(_ref) {
  var arc = _ref.arc,
    path = _ref.path,
    datumColor = _ref.datumColor,
    onMouseOver = _ref.onMouseOver,
    onMouseOut = _ref.onMouseOut,
    renderTooltip = _ref.renderTooltip;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _hsv = (0, _d3Hsv.hsv)(datumColor),
    h = _hsv.h,
    s = _hsv.s,
    v = _hsv.v;
  var hoverColor = (0, _d3Hsv.hsv)(h, s, Math.min(v + 0.2, 1)).hex();
  return _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: path(_objectSpread({}, arc)) || undefined,
    fill: isHovered ? datumColor : 'transparent',
    transform: "scale(".concat(_pieConstants.PIE_SLICE_ZOOM, ")"),
    opacity: "0.4"
  }), _react["default"].createElement("path", {
    d: path(_objectSpread({}, arc)) || undefined,
    fill: isHovered ? hoverColor : datumColor,
    onMouseMove: function onMouseMove(e) {
      var coords = (0, _event.localPoint)(e.target.ownerSVGElement, e);
      onMouseOver(arc, coords);
      if (renderTooltip) {
        setIsHovered(true);
      }
    },
    onMouseLeave: function onMouseLeave() {
      onMouseOut();
      setIsHovered(false);
    },
    stroke: theme.colors.background,
    strokeWidth: 1
  }));
};
exports.PieArc = PieArc;
//# sourceMappingURL=PieArc.js.map