"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePreviousValue = void 0;

var _react = require("react");

var usePreviousValue = function usePreviousValue(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

exports.usePreviousValue = usePreviousValue;
//# sourceMappingURL=usePreviousValue.js.map