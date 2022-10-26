"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useElementVisibility = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../utils");

var useElementVisibility = function useElementVisibility() {
  var _useCallbackRef = (0, _utils.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      ref = _useCallbackRef2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  (0, _react.useEffect)(function () {
    var observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
          entry = _ref2[0];

      setIsVisible(entry.intersectionRatio > 0);
    }, {
      threshold: [0, 1]
    });

    if (element && observer) {
      observer.observe && observer.observe(element);
    }

    return function () {
      if (element && observer) {
        observer.unobserve && observer.unobserve(element);
      }
    };
  }, [element]);
  return [isVisible, ref];
};

exports.useElementVisibility = useElementVisibility;
//# sourceMappingURL=MenuHeading.hooks.js.map