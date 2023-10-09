"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScrollable = void 0;
exports.useOptionScroll = useOptionScroll;
var _react = require("react");
var _utils = require("../../../../utils");
var _state = require("./state");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var relativeElementVisibility = function relativeElementVisibility(listElement, containerScrollPosition) {
  var containerHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var offsetTop = listElement.offsetTop;
  var isAbove = offsetTop < containerScrollPosition;
  var isBelow = offsetTop >= containerScrollPosition + containerHeight;
  return isAbove && 'above' || isBelow && 'below' || 'visible';
};
var isScrollable = function isScrollable(el) {
  if (el) {
    if (el.scrollHeight > el.clientHeight) {
      return true;
    } else {
      return isScrollable(el.parentElement);
    }
  }
  return false;
};
exports.isScrollable = isScrollable;
function useOptionScroll(context, value, label, scrollIntoView, isActive) {
  var _useContext = (0, _react.useContext)(context),
    transition = _useContext.transition,
    _useContext$listScrol = _useContext.listScrollPosition,
    listScrollPosition = _useContext$listScrol === void 0 ? 0 : _useContext$listScrol,
    _useContext$listClien = _useContext.listClientRect,
    listClientRect = _useContext$listClien === void 0 ? {
      height: 0
    } : _useContext$listClien;
  var _useCallbackRef = (0, _utils.useCallbackRef)(),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    newTriggerElement = _useCallbackRef2[0],
    callbackRef = _useCallbackRef2[1];
  (0, _react.useEffect)(function () {
    if (scrollIntoView) {
      if (newTriggerElement) {
        if (isScrollable(newTriggerElement)) {
          newTriggerElement.scrollIntoView();
        }
      }
      if (!isActive) {
        transition && transition(_state.ComboboxActionType.NAVIGATE, {
          option: {
            label: label,
            value: value
          }
        });
      }
    }
  }, [newTriggerElement, scrollIntoView]);
  (0, _react.useEffect)(function () {
    if (isActive && newTriggerElement) {
      var visibility = relativeElementVisibility(newTriggerElement, listScrollPosition, listClientRect.height);
      if (visibility !== 'visible') {
        var attachToTop = visibility === 'above';
        if (isScrollable(newTriggerElement)) {
          newTriggerElement.scrollIntoView(attachToTop);
        }
      }
    }
  }, [newTriggerElement, isActive]);
  return callbackRef;
}
//# sourceMappingURL=useOptionScroll.js.map