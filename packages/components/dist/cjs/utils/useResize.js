"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResize = void 0;
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _react = require("react");
var _useSafeLayoutEffect = require("./useSafeLayoutEffect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useResize = function useResize(element, handler) {
  var throttledHandler = (0, _react.useMemo)(function () {
    return (0, _throttle["default"])(handler, 100);
  }, [handler]);
  (0, _useSafeLayoutEffect.useSafeLayoutEffect)(function () {
    if (!element) return;
    handler();
    var resizeObserver = new ResizeObserver(throttledHandler);
    resizeObserver.observe(element);
    window.addEventListener('resize', throttledHandler);
    return function () {
      resizeObserver.disconnect();
      window.removeEventListener('resize', throttledHandler);
    };
  }, [handler, throttledHandler, element]);
};
exports.useResize = useResize;
//# sourceMappingURL=useResize.js.map