"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breakpoint = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _styledComponents = require("styled-components");

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Breakpoint = function Breakpoint(_ref) {
  var children = _ref.children,
      show = _ref.show;

  var _ref2 = (0, _isArray["default"])(show) ? show : [show, show],
      _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      _ref3$ = _ref3[0],
      from = _ref3$ === void 0 ? 'mobile' : _ref3$,
      _ref3$2 = _ref3[1],
      to = _ref3$2 === void 0 ? 'xl' : _ref3$2;

  var _useState = (0, _react.useState)(typeof document === 'undefined' ? 800 : document.body.clientWidth),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      screenWidth = _useState2[0],
      setScreenWidth = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();
  var breakpointPx = theme.breakpoints.map(function (b) {
    return (0, _designTokens.convertRemToPx)(parseInt(b.replace('rem', '')));
  });
  var fromIndex = theme.breakpoints.indexOf(_designTokens.BreakpointRamp[from]);
  var toIndex = theme.breakpoints.indexOf(_designTokens.BreakpointRamp[to]);

  var handleResize = function handleResize() {
    if (document) {
      setScreenWidth(document.body.clientWidth);
    }
  };

  (0, _utils.useResize)(typeof document === 'undefined' ? null : document.body, handleResize);
  var screenMin = from === 'mobile' ? 0 : breakpointPx[fromIndex - 1];
  var screenMax = to === 'xl' ? Infinity : breakpointPx[toIndex];
  return _react["default"].createElement(_react["default"].Fragment, null, screenWidth > screenMin && screenWidth <= screenMax ? children : null);
};

exports.Breakpoint = Breakpoint;
//# sourceMappingURL=Breakpoint.js.map