"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useComboboxRefs = useComboboxRefs;
var _react = require("react");
var _utils = require("../../../../utils");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useComboboxRefs(forwardedRef) {
  var _useCallbackRef = (0, _utils.useCallbackRef)(forwardedRef),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
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