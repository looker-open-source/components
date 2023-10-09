"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRipple = void 0;
var _styledComponents = require("styled-components");
var _utils = require("../utils");
var _useRippleState2 = require("./useRippleState");
var _useRippleStateBG2 = require("./useRippleStateBG");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getMinMaxDimensions = function getMinMaxDimensions(width, height) {
  var min = Math.min(width, height);
  var max = Math.max(width, height);
  return [min, max];
};
var getRippleScaleRange = function getRippleScaleRange(bounded, min, max, size, noScale) {
  var start = 0.1;
  if (bounded && min > 0 && max > 0) {
    var startBounded = min === max ? start : 1;
    var end = Math.hypot(min, max) / min;
    if (noScale) {
      return [end, end];
    }
    return [startBounded, end];
  }
  if (noScale) {
    return [size, size];
  }
  return [start, size];
};
var getRippleOffset = function getRippleOffset(min, max, bounded) {
  if (!bounded || min === max) {
    return '0, 0';
  }
  var offset = max / 2 - min / 2;
  return "".concat(offset, "px, 0");
};
var useRipple = function useRipple(_ref) {
  var _ref$bounded = _ref.bounded,
    bounded = _ref$bounded === void 0 ? false : _ref$bounded,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'neutral' : _ref$color,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 0 : _ref$height,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 1 : _ref$size,
    style = _ref.style,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width;
  var _useTheme = (0, _styledComponents.useTheme)(),
    colors = _useTheme.colors,
    brandAnimation = _useTheme.defaults.brandAnimation;
  var _getMinMaxDimensions = getMinMaxDimensions(width, height),
    _getMinMaxDimensions2 = _slicedToArray(_getMinMaxDimensions, 2),
    min = _getMinMaxDimensions2[0],
    max = _getMinMaxDimensions2[1];
  var rippleScaleRange = getRippleScaleRange(bounded, min, max, size, !brandAnimation);
  var rippleOffset = getRippleOffset(min, max, bounded);
  var _useRippleStateBG = (0, _useRippleStateBG2.useRippleStateBG)(),
    startBG = _useRippleStateBG.start,
    endBG = _useRippleStateBG.end,
    bgClass = _useRippleStateBG.className;
  var _useRippleState = (0, _useRippleState2.useRippleState)(),
    startFG = _useRippleState.start,
    endFG = _useRippleState.end,
    fgClass = _useRippleState.className;
  var rippleStyle = {
    '--ripple-color': colors[color],
    '--ripple-overflow': bounded ? 'hidden' : 'visible',
    '--ripple-scale-end': rippleScaleRange[1] || 1,
    '--ripple-scale-start': rippleScaleRange[0],
    '--ripple-size': bounded && min > 0 ? "".concat(min, "px") : '100%',
    '--ripple-translate': rippleOffset
  };
  return {
    callbacks: {
      endBG: endBG,
      endFG: endFG,
      startBG: startBG,
      startFG: startFG
    },
    className: (0, _utils.mergeClassNames)([className, "".concat(bgClass, " ").concat(fgClass)]),
    style: _objectSpread(_objectSpread({}, style), rippleStyle)
  };
};
exports.useRipple = useRipple;
//# sourceMappingURL=useRipple.js.map