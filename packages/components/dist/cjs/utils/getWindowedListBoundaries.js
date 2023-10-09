"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowedListBoundaries = getWindowedListBoundaries;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialResult = {
  after: null,
  before: null,
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
    itemHeight = _ref.itemHeight,
    _ref$spacerTag = _ref.spacerTag,
    spacerTag = _ref$spacerTag === void 0 ? 'div' : _ref$spacerTag;
  if (!enabled) return _objectSpread(_objectSpread({}, initialResult), {}, {
    end: itemCount - 1
  });
  if (scrollPosition === undefined || height === undefined) return initialResult;
  var top = Math.floor(scrollPosition / itemHeight);
  var bottom = Math.ceil((height + scrollPosition) / itemHeight);
  var start = top - buffer < 0 ? 0 : top - buffer;
  var end = bottom + buffer > itemCount - 1 ? itemCount - 1 : bottom + buffer;
  var afterLength = itemCount - 1 - end;
  var afterHeight = afterLength * itemHeight;
  var beforeHeight = start * itemHeight;
  var Spacer = spacerTag;
  var before = beforeHeight > 0 ? _react["default"].createElement(Spacer, {
    style: {
      height: "".concat(beforeHeight, "px")
    },
    "data-testid": "before"
  }) : null;
  var after = afterHeight > 0 ? _react["default"].createElement(Spacer, {
    style: {
      height: "".concat(afterHeight, "px")
    },
    "data-testid": "after"
  }) : null;
  return {
    after: after,
    before: before,
    end: end,
    start: start
  };
}
//# sourceMappingURL=getWindowedListBoundaries.js.map