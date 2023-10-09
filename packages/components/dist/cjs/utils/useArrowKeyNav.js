"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrowKeyNav = void 0;
var _react = require("react");
var _checkElementRemoved = require("./checkElementRemoved");
var _getNextFocus = require("./getNextFocus");
var _useForkedRef = require("./useForkedRef");
var _useWrapEvent = require("./useWrapEvent");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useArrowKeyNav = function useArrowKeyNav(_ref) {
  var _ref$axis = _ref.axis,
    axis = _ref$axis === void 0 ? 'vertical' : _ref$axis,
    disabled = _ref.disabled,
    _ref$getNextFocus = _ref.getNextFocus,
    getNextFocus = _ref$getNextFocus === void 0 ? _getNextFocus.getNextFocus : _ref$getNextFocus,
    ref = _ref.ref,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    onKeyDown = _ref.onKeyDown;
  var internalRef = (0, _react.useRef)(null);
  var focusedItemRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    focusInside = _useState2[0],
    setFocusInside = _useState2[1];
  var handleArrowKey = function handleArrowKey(e, direction, vertical) {
    if (internalRef.current) {
      var newFocusedItem = getNextFocus(direction, internalRef.current, vertical);
      if (newFocusedItem) {
        e.preventDefault();
        newFocusedItem.focus();
      }
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowUp':
        axis !== 'horizontal' && handleArrowKey(e, -1, true);
        break;
      case 'ArrowDown':
        axis !== 'horizontal' && handleArrowKey(e, 1, true);
        break;
      case 'ArrowLeft':
        axis !== 'vertical' && handleArrowKey(e, -1, false);
        break;
      case 'ArrowRight':
        axis !== 'vertical' && handleArrowKey(e, 1, false);
        break;
    }
  };
  var placeInitialFocus = (0, _react.useCallback)(function () {
    if (internalRef.current) {
      var toFocus = getNextFocus(1, internalRef.current);
      if (toFocus) {
        toFocus.focus({
          preventScroll: true
        });
      }
    }
  }, [getNextFocus]);
  var handleFocus = function handleFocus(e) {
    if (e.target === internalRef.current) {
      if (focusedItemRef.current && internalRef.current.contains(focusedItemRef.current)) {
        focusedItemRef.current.focus();
      } else {
        try {
          if (internalRef.current.matches(':focus-visible')) {
            placeInitialFocus();
          }
        } catch (e) {
          placeInitialFocus();
        }
      }
    } else {
      focusedItemRef.current = e.target;
      setFocusInside(true);
    }
  };
  var handleBlur = function handleBlur() {
    setFocusInside(false);
  };
  (0, _react.useEffect)(function () {
    var element = internalRef.current;
    var observer = new MutationObserver(function (mutationsList) {
      if ((0, _checkElementRemoved.checkElementRemoved)(mutationsList, focusedItemRef.current)) {
        placeInitialFocus();
      }
    });
    if (focusInside && element) {
      observer.observe(element, {
        childList: true,
        subtree: true
      });
    }
    return function () {
      observer.disconnect();
    };
  }, [focusInside, placeInitialFocus]);
  var navProps = {
    onBlur: (0, _useWrapEvent.useWrapEvent)(handleBlur, onBlur),
    onFocus: (0, _useWrapEvent.useWrapEvent)(handleFocus, onFocus),
    onKeyDown: (0, _useWrapEvent.useWrapEvent)(handleKeyDown, onKeyDown),
    ref: (0, _useForkedRef.useForkedRef)(internalRef, ref),
    tabIndex: focusInside ? undefined : 0
  };
  return disabled ? {} : navProps;
};
exports.useArrowKeyNav = useArrowKeyNav;
//# sourceMappingURL=useArrowKeyNav.js.map