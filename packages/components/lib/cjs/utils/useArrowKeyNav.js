"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrowKeyNav = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _checkElementRemoved = require("./checkElementRemoved");

var _getNextFocus = require("./getNextFocus");

var _useForkedRef = require("./useForkedRef");

var _useWrapEvent = require("./useWrapEvent");

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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