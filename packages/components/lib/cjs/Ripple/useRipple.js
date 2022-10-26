"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRipple = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _styledComponents = require("styled-components");

var _utils = require("../utils");

var _useRippleState2 = require("./useRippleState");

var _useRippleStateBG2 = require("./useRippleStateBG");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      _getMinMaxDimensions2 = (0, _slicedToArray2["default"])(_getMinMaxDimensions, 2),
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