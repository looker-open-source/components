"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResize = void 0;

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _useSafeLayoutEffect = require("./useSafeLayoutEffect");

var useResize = function useResize(element, handler) {
  (0, _useSafeLayoutEffect.useSafeLayoutEffect)(function () {
    var throttledHandler = (0, _throttle["default"])(handler, 100);

    if (!element) {
      return;
    }

    handler();
    var resizeObserver = new ResizeObserver(function () {
      return throttledHandler();
    });

    if (element) {
      resizeObserver.observe(element);
    }

    window.addEventListener('resize', throttledHandler);
    return function () {
      window.removeEventListener('resize', throttledHandler);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [handler, element]);
};

exports.useResize = useResize;
//# sourceMappingURL=useResize.js.map