import { useContext } from 'react';
import { ComboboxActionType, ComboboxState } from './state';
export function useBlur(context) {
  const {
    data: {
      inputValue
    },
    state,
    transition,
    listRef,
    inputElement,
    freeInputPropRef
  } = useContext(context);

  function closeList(action) {
    const payload = freeInputPropRef && freeInputPropRef.current ? {
      inputValue
    } : undefined;
    transition && transition(action, payload);
  }

  return function handleBlur(e) {
    if (!e) {
      if (state !== ComboboxState.IDLE) {
        closeList(ComboboxActionType.ESCAPE);
      }

      return;
    }

    const nextFocusTarget = e.relatedTarget;
    const popoverCurrent = listRef ? listRef.current : null;

    if (popoverCurrent) {
      const focusInList = popoverCurrent && popoverCurrent.contains(nextFocusTarget);

      if (focusInList && state !== ComboboxState.INTERACTING) {
        transition && transition(ComboboxActionType.INTERACT);
      } else if (!focusInList && nextFocusTarget !== inputElement) {
        closeList(ComboboxActionType.BLUR);
      }

      focusInList && freeInputPropRef && freeInputPropRef.current && e.preventDefault();
    }
  };
}
//# sourceMappingURL=useBlur.js.map