"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInputEvents = useInputEvents;

var _react = require("react");

var _utils = require("../../../../utils");

var _state = require("./state");

var _useBlur = require("./useBlur");

var _useKeyDown = require("./useKeyDown");

function useInputEvents(_ref, context) {
  var disabled = _ref.disabled,
      _ref$selectOnClick = _ref.selectOnClick,
      selectOnClick = _ref$selectOnClick === void 0 ? false : _ref$selectOnClick,
      _ref$inputReadOnly = _ref.inputReadOnly,
      inputReadOnly = _ref$inputReadOnly === void 0 ? false : _ref$inputReadOnly,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onKeyDown = _ref.onKeyDown,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;

  var _useContext = (0, _react.useContext)(context),
      lastActionType = _useContext.data.lastActionType,
      inputElement = _useContext.inputElement,
      openOnFocus = _useContext.openOnFocus,
      openOnClick = _useContext.openOnClick,
      persistSelectionPropRef = _useContext.persistSelectionPropRef,
      state = _useContext.state,
      transition = _useContext.transition;

  var selectOnClickRef = (0, _react.useRef)(false);
  var handleKeyDown = (0, _useKeyDown.useKeyDown)();
  var handleBlur = (0, _useBlur.useBlur)(context);

  function handleFocus(e) {
    if (inputReadOnly) {
      var input = e.currentTarget;
      input.selectionStart = input.selectionEnd;
    } else if (selectOnClick) {
      selectOnClickRef.current = true;
    }

    if (openOnFocus && lastActionType !== _state.ComboboxActionType.SELECT_WITH_CLICK && lastActionType !== _state.ComboboxActionType.NAVIGATE) {
      transition && transition(_state.ComboboxActionType.FOCUS, {
        persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
      });
    }
  }

  var selectText = (0, _react.useCallback)(function () {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false;
      inputElement && inputElement.select();
    }
  }, [inputElement]);
  var handleMouseDownClick = (0, _react.useCallback)(function (e) {
    if (disabled) return;

    if ((0, _utils.targetIsButton)(e)) {
      return;
    }

    if (state === _state.ComboboxState.IDLE) {
      if (openOnClick) {
        transition && transition(_state.ComboboxActionType.FOCUS, {
          persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
        });
      }
    } else {
      transition && transition(_state.ComboboxActionType.ESCAPE);
    }

    if (e.type === 'click') {
      selectText();
    }
  }, [disabled, openOnClick, persistSelectionPropRef, state, selectText, transition]);
  var handleMouseUp = (0, _react.useCallback)(function (e) {
    if (e.target === inputElement) {
      selectText();
    }
  }, [inputElement, selectText]);

  var _useMouseDownClick = (0, _utils.useMouseDownClick)(handleMouseDownClick, handleMouseUp),
      handleMouseDown = _useMouseDownClick.onMouseDown,
      handleClick = _useMouseDownClick.onClick;

  var wrappedOnBlur = (0, _utils.useWrapEvent)(handleBlur, onBlur);
  var wrappedOnClick = (0, _utils.useWrapEvent)(handleClick, onClick);
  var wrappedOnFocus = (0, _utils.useWrapEvent)(handleFocus, onFocus);
  var wrappedOnMouseDown = (0, _utils.useWrapEvent)(handleMouseDown, onMouseDown);
  var wrappedOnKeyDown = (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown);
  return {
    onBlur: wrappedOnBlur,
    onClick: wrappedOnClick,
    onFocus: wrappedOnFocus,
    onKeyDown: wrappedOnKeyDown,
    onMouseDown: wrappedOnMouseDown
  };
}
//# sourceMappingURL=useInputEvents.js.map