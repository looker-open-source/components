import { useRef, useContext, useCallback } from 'react';
import { targetIsButton, useMouseDownClick, useWrapEvent } from '../../../../utils';
import { ComboboxActionType, ComboboxState } from './state';
import { useBlur } from './useBlur';
import { useKeyDown } from './useKeyDown';
export function useInputEvents({
  disabled,
  selectOnClick = false,
  inputReadOnly = false,
  onClick,
  onMouseDown,
  onKeyDown,
  onBlur,
  onFocus
}, context) {
  const {
    data: {
      lastActionType
    },
    inputElement,
    openOnFocus,
    openOnClick,
    persistSelectionPropRef,
    state,
    transition
  } = useContext(context);
  const selectOnClickRef = useRef(false);
  const handleKeyDown = useKeyDown();
  const handleBlur = useBlur(context);

  function handleFocus(e) {
    if (inputReadOnly) {
      const input = e.currentTarget;
      input.selectionStart = input.selectionEnd;
    } else if (selectOnClick) {
      selectOnClickRef.current = true;
    }

    if (openOnFocus && lastActionType !== ComboboxActionType.SELECT_WITH_CLICK && lastActionType !== ComboboxActionType.NAVIGATE) {
      transition && transition(ComboboxActionType.FOCUS, {
        persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
      });
    }
  }

  const selectText = useCallback(() => {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false;
      inputElement && inputElement.select();
    }
  }, [inputElement]);
  const handleMouseDownClick = useCallback(e => {
    if (disabled) return;

    if (targetIsButton(e)) {
      return;
    }

    if (state === ComboboxState.IDLE) {
      if (openOnClick) {
        transition && transition(ComboboxActionType.FOCUS, {
          persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
        });
      }
    } else {
      transition && transition(ComboboxActionType.ESCAPE);
    }

    if (e.type === 'click') {
      selectText();
    }
  }, [disabled, openOnClick, persistSelectionPropRef, state, selectText, transition]);
  const handleMouseUp = useCallback(e => {
    if (e.target === inputElement) {
      selectText();
    }
  }, [inputElement, selectText]);
  const {
    onMouseDown: handleMouseDown,
    onClick: handleClick
  } = useMouseDownClick(handleMouseDownClick, handleMouseUp);
  const wrappedOnBlur = useWrapEvent(handleBlur, onBlur);
  const wrappedOnClick = useWrapEvent(handleClick, onClick);
  const wrappedOnFocus = useWrapEvent(handleFocus, onFocus);
  const wrappedOnMouseDown = useWrapEvent(handleMouseDown, onMouseDown);
  const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown);
  return {
    onBlur: wrappedOnBlur,
    onClick: wrappedOnClick,
    onFocus: wrappedOnFocus,
    onKeyDown: wrappedOnKeyDown,
    onMouseDown: wrappedOnMouseDown
  };
}
//# sourceMappingURL=useInputEvents.js.map