"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowedListBoundaries = getWindowedListBoundaries;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialResult = {
  afterHeight: 0,
  beforeHeight: 0,
  end: 0,
  start: 0
};

function getWindowedListBoundaries(_ref) {
  var _ref$buffer = _ref.buffer,
      buffer = _ref$buffer === void 0 ? 5 : _ref$buffer,
      height = _ref.height,
      scrollPosition = _ref.scrollPosition,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      itemCount = _ref.itemCount,
      itemHeight = _ref.itemHeight;
  if (!enabled) return _objectSpread(_objectSpread({}, initialResult), {}, {
    end: itemCount - 1
  });
  if (scrollPosition === undefined || height === undefined) return initialResult;
  var top = Math.floor(scrollPosition / itemHeight);
  var bottom = Math.ceil((height + scrollPosition) / itemHeight);
  var start = top - buffer < 0 ? 0 : top - buffer;
  var end = bottom + buffer > itemCount - 1 ? itemCount - 1 : bottom + buffer;
  var afterLength = itemCount - 1 - end;
  return {
    afterHeight: afterLength * itemHeight,
    beforeHeight: start * itemHeight,
    end: end,
    start: start
  };
}
//# sourceMappingURL=getWindowedListBoundaries.js.map