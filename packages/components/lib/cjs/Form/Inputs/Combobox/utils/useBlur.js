"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlur = useBlur;

var _react = require("react");

var _state = require("./state");

function useBlur(context) {
  var _useContext = (0, _react.useContext)(context),
      inputValue = _useContext.data.inputValue,
      state = _useContext.state,
      transition = _useContext.transition,
      listRef = _useContext.listRef,
      inputElement = _useContext.inputElement,
      freeInputPropRef = _useContext.freeInputPropRef;

  function closeList(action) {
    var payload = freeInputPropRef && freeInputPropRef.current ? {
      inputValue: inputValue
    } : undefined;
    transition && transition(action, payload);
  }

  return function handleBlur(e) {
    if (!e) {
      if (state !== _state.ComboboxState.IDLE) {
        closeList(_state.ComboboxActionType.ESCAPE);
      }

      return;
    }

    var nextFocusTarget = e.relatedTarget;
    var popoverCurrent = listRef ? listRef.current : null;

    if (popoverCurrent) {
      var focusInList = popoverCurrent && popoverCurrent.contains(nextFocusTarget);

      if (focusInList && state !== _state.ComboboxState.INTERACTING) {
        transition && transition(_state.ComboboxActionType.INTERACT);
      } else if (!focusInList && nextFocusTarget !== inputElement) {
        closeList(_state.ComboboxActionType.BLUR);
      }

      focusInList && freeInputPropRef && freeInputPropRef.current && e.preventDefault();
    }
  };
}
//# sourceMappingURL=useBlur.js.map