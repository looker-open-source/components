"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useComboboxRefs = useComboboxRefs;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../../../../utils");

function useComboboxRefs(forwardedRef) {
  var _useCallbackRef = (0, _utils.useCallbackRef)(forwardedRef),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      wrapperElement = _useCallbackRef2[0],
      ref = _useCallbackRef2[1];

  var optionsRef = (0, _react.useRef)([]);
  var listRef = (0, _react.useRef)(null);
  var autoCompletePropRef = (0, _react.useRef)(true);
  var inputReadOnlyPropRef = (0, _react.useRef)(false);
  var persistSelectionPropRef = (0, _react.useRef)(false);
  var closeOnSelectPropRef = (0, _react.useRef)(true);
  var windowingPropRef = (0, _react.useRef)(false);
  var isScrollingRef = (0, _react.useRef)(false);
  var indicatorPropRef = (0, _react.useRef)(false);
  var freeInputPropRef = (0, _react.useRef)(false);
  return {
    autoCompletePropRef: autoCompletePropRef,
    closeOnSelectPropRef: closeOnSelectPropRef,
    freeInputPropRef: freeInputPropRef,
    indicatorPropRef: indicatorPropRef,
    inputReadOnlyPropRef: inputReadOnlyPropRef,
    isScrollingRef: isScrollingRef,
    listRef: listRef,
    optionsRef: optionsRef,
    persistSelectionPropRef: persistSelectionPropRef,
    ref: ref,
    windowingPropRef: windowingPropRef,
    wrapperElement: wrapperElement
  };
}
//# sourceMappingURL=useComboboxRefs.js.map