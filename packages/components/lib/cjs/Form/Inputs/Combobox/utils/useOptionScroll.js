"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScrollable = void 0;
exports.useOptionScroll = useOptionScroll;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../../../../utils");

var _state = require("./state");

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
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
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