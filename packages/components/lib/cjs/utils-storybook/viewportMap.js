"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEWPORT_MAP = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toPairs = _interopRequireDefault(require("lodash/toPairs"));

var _startCase = _interopRequireDefault(require("lodash/startCase"));

var _designTokens = require("@looker/design-tokens");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var VIEWPORT_MAP = (0, _toPairs["default"])(_designTokens.BreakpointRamp).reduce(function (map, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      name = _ref2[0],
      size = _ref2[1];

  var sizePx = (0, _designTokens.convertRemToPx)(parseInt(size || '', 10));
  var width = "".concat(sizePx, "px");
  var height = sizePx < (0, _designTokens.convertRemToPx)(parseInt(_designTokens.breakpoints[2])) ? "".concat(Math.round(sizePx * 2.16), "px") : "".concat(Math.round(sizePx * 0.55), "px");
  return _objectSpread(_objectSpread({}, map), {}, (0, _defineProperty2["default"])({}, name, {
    name: (0, _startCase["default"])(name),
    styles: {
      height: height,
      width: width
    },
    type: name
  }));
}, {});
exports.VIEWPORT_MAP = VIEWPORT_MAP;
//# sourceMappingURL=viewportMap.js.map