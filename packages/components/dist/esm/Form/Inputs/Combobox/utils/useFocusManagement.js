import { useEffect } from 'react';
import { useCallbackRef } from '../../../../utils';
import { ComboboxActionType } from './state';
export function useFocusManagement(lastActionType) {
  const [inputElement, inputCallbackRef] = useCallbackRef();
  useEffect(() => {
    if (lastActionType === ComboboxActionType.SELECT_WITH_CLICK || lastActionType === ComboboxActionType.INTERACT) {
      if (inputElement) {
        inputElement.focus();
        inputElement.scrollLeft = 0;
      }
    }
  }, [lastActionType]);
  return {
    inputCallbackRef,
    inputElement
  };
}
//# sourceMappingURL=useFocusManagement.js.map