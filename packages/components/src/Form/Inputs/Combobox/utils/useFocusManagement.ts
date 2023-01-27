/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useCallbackRef, useSafeLayoutEffect } from '../../../../utils'
import { ComboboxActionType } from './state'

// Move focus back to the input if we start navigating w/ the
// keyboard after focus has moved to any focus-able content in
// the popup.

export function useFocusManagement(lastActionType?: ComboboxActionType) {
  const [inputElement, inputCallbackRef] = useCallbackRef<HTMLInputElement>()
  // useSafeLayoutEffect so that the cursor goes to the end of the input instead
  // of awkwardly at the beginning, unclear to my why ...
  useSafeLayoutEffect(() => {
    if (
      lastActionType === ComboboxActionType.SELECT_WITH_CLICK ||
      lastActionType === ComboboxActionType.INTERACT
    ) {
      if (inputElement) {
        inputElement.focus()
        inputElement.scrollLeft = 0
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastActionType])

  return { inputCallbackRef, inputElement }
}
