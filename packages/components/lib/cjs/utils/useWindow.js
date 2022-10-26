"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindow = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getWindowedListBoundaries = require("./getWindowedListBoundaries");

var _useCallbackRef3 = require("./useCallbackRef");

var _useMeasuredElement3 = require("./useMeasuredElement");

var _useScrollPosition = require("./useScrollPosition");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useWindow = function useWindow(_ref) {
  var itemCount = _ref.itemCount,
      enabled = _ref.enabled,
      itemHeight = _ref.itemHeight,
      ref = _ref.ref,
      _ref$spacerTag = _ref.spacerTag,
      spacerTag = _ref$spacerTag === void 0 ? 'div' : _ref$spacerTag;

  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(ref),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      containerElement = _useCallbackRef2[0],
      callbackRef = _useCallbackRef2[1];

  var _useMeasuredElement = (0, _useMeasuredElement3.useMeasuredElement)(enabled ? containerElement : null),
      _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 1),
      height = _useMeasuredElement2[0].height;

  var scrollPosition = (0, _useScrollPosition.useScrollPosition)(enabled ? containerElement : null);

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      enabled: enabled,
      height: height,
      itemCount: itemCount,
      itemHeight: itemHeight,
      scrollPosition: scrollPosition
    });
  }, [enabled, itemCount, height, itemHeight, scrollPosition]),
      start = _useMemo.start,
      end = _useMemo.end,
      beforeHeight = _useMemo.beforeHeight,
      afterHeight = _useMemo.afterHeight;

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
    containerElement: containerElement,
    end: end,
    ref: callbackRef,
    start: start
  };
};

exports.useWindow = useWindow;
//# sourceMappingURL=useWindow.js.map