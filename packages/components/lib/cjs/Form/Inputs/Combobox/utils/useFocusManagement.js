"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusManagement = useFocusManagement;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../../../../utils");

var _state = require("./state");

function useFocusManagement(lastActionType) {
  var _useCallbackRef = (0, _utils.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      inputElement = _useCallbackRef2[0],
      inputCallbackRef = _useCallbackRef2[1];

  (0, _utils.useSafeLayoutEffect)(function () {
    if (lastActionType === _state.ComboboxActionType.SELECT_WITH_CLICK || lastActionType === _state.ComboboxActionType.INTERACT) {
      if (inputElement) {
        inputElement.focus();
        inputElement.scrollLeft = 0;
      }
    }
  }, [lastActionType]);
  return {
    inputCallbackRef: inputCallbackRef,
    inputElement: inputElement
  };
}
//# sourceMappingURL=useFocusManagement.js.map