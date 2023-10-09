"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMounted = useMounted;
var _react = require("react");
function useMounted() {
  var mounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    mounted.current = true;
    return function cleanup() {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
//# sourceMappingURL=useMounted.js.map