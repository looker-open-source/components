"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForkedRef = useForkedRef;

var _react = require("react");

function assignRef(ref, value) {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(value);
  } else {
    try {
      ;
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"".concat(value, "\" to ref \"").concat(ref, "\""));
    }
  }
}

function useForkedRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0, _react.useMemo)(function () {
    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    };
  }, refs);
}
//# sourceMappingURL=useForkedRef.js.map