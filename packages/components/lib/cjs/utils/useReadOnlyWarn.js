"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReadOnlyWarn = useReadOnlyWarn;

var _react = require("react");

function useReadOnlyWarn(name, value, onChange) {
  var unintentionalReadOnly = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (value && !onChange) {
      console.error("Warning: Failed prop type: You provided a `value` prop to <".concat(name, " /> without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue` instead. Otherwise, please provide an `onChange` callback."));
      unintentionalReadOnly.current = true;
    }
  }, [value, onChange, name]);
  return unintentionalReadOnly.current;
}
//# sourceMappingURL=useReadOnlyWarn.js.map