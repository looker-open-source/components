"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollPosition = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _react = require("react");

var useScrollPosition = function useScrollPosition(element) {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      scrollPosition = _useState2[0],
      setScrollPosition = _useState2[1];

  (0, _react.useEffect)(function () {
    var scrollListener = (0, _throttle["default"])(function () {
      if (element) {
        setScrollPosition(element.scrollTop);
      }
    }, 50, {
      leading: true,
      trailing: true
    });

    if (element) {
      element.addEventListener('scroll', scrollListener);
      scrollListener();
    }

    return function () {
      element && element.removeEventListener('scroll', scrollListener);
      setScrollPosition(0);
    };
  }, [element]);
  return scrollPosition;
};

exports.useScrollPosition = useScrollPosition;
//# sourceMappingURL=useScrollPosition.js.map