/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from 'react'
import { useCallbackRef } from '../../../../utils'
import { ComboboxActionType } from './state'

// Move focus back to the input if we start navigating w/ the
// keyboard after focus has moved to any focus-able content in
// the popup.

export function useFocusManagement(lastActionType?: ComboboxActionType) {
  const [inputElement, inputCallbackRef] = useCallbackRef<HTMLInputElement>()
  useEffect(() => {
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
