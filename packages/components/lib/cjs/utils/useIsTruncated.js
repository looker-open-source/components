"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsTruncated = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useSafeLayoutEffect = require("./useSafeLayoutEffect");

var isOverflowing = function isOverflowing(node) {
  return node.offsetWidth < node.scrollWidth;
};

var useIsTruncated = function useIsTruncated(element, identity) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isTruncated = _useState2[0],
      setIsTruncated = _useState2[1];

  var handleResize = (0, _react.useCallback)(function () {
    element && setIsTruncated(isOverflowing(element));
  }, [element]);
  (0, _useSafeLayoutEffect.useSafeLayoutEffect)(function () {
    if (!element) {
      return;
    }

    var resizeObserver = new ResizeObserver(function () {
      return handleResize();
    });

    if (element) {
      resizeObserver.observe(element);
    }

    return function () {
      if (!resizeObserver) {
        return;
      }

      resizeObserver.disconnect();
    };
  }, [handleResize, element, identity]);
  return isTruncated;
};

exports.useIsTruncated = useIsTruncated;
//# sourceMappingURL=useIsTruncated.js.map