import { useLayoutEffect } from 'react'
import { useCallbackRef } from '../../../../utils'
import { ComboboxActionType } from './state'

// Move focus back to the input if we start navigating w/ the
// keyboard after focus has moved to any focus-able content in
// the popup.

export function useFocusManagement(lastActionType?: ComboboxActionType) {
  const [inputElement, inputCallbackRef] = useCallbackRef<HTMLInputElement>()
  // useLayoutEffect so that the cursor goes to the end of the input instead
  // of awkwardly at the beginning, unclear to my why ...
  useLayoutEffect(() => {
    if (
      lastActionType === ComboboxActionType.NAVIGATE ||
      lastActionType === ComboboxActionType.ESCAPE ||
      lastActionType === ComboboxActionType.SELECT_WITH_CLICK
    ) {
      inputElement && inputElement.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastActionType])

  return { inputCallbackRef, inputElement }
}
