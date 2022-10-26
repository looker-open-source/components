"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInputPropRefs = useInputPropRefs;

var _react = require("react");

var _utils = require("../../../../utils");

function useInputPropRefs(_ref, context) {
  var _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? true : _ref$autoComplete,
      _ref$freeInput = _ref.freeInput,
      freeInput = _ref$freeInput === void 0 ? false : _ref$freeInput,
      _ref$inputReadOnly = _ref.inputReadOnly,
      inputReadOnly = _ref$inputReadOnly === void 0 ? false : _ref$inputReadOnly;

  var _useContext = (0, _react.useContext)(context),
      autoCompletePropRef = _useContext.autoCompletePropRef,
      freeInputPropRef = _useContext.freeInputPropRef,
      inputReadOnlyPropRef = _useContext.inputReadOnlyPropRef;

  (0, _utils.useSafeLayoutEffect)(function () {
    if (autoCompletePropRef) autoCompletePropRef.current = autoComplete;
  }, [autoComplete]);
  (0, _utils.useSafeLayoutEffect)(function () {
    if (freeInputPropRef) freeInputPropRef.current = freeInput;
  }, [freeInput]);
  (0, _utils.useSafeLayoutEffect)(function () {
    if (inputReadOnlyPropRef) inputReadOnlyPropRef.current = inputReadOnly;
  }, [inputReadOnly]);
}
//# sourceMappingURL=useInputPropRefs.js.map