/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import { useRef, useEffect } from 'react'
import type {
  ComboboxCallback,
  MaybeComboboxOptionObject,
  ComboboxOptionType,
} from '../types'
import { ComboboxState } from '../utils/state'

const visibleStates = [
  ComboboxState.SUGGESTING,
  ComboboxState.NAVIGATING,
  ComboboxState.INTERACTING,
]
export const getIsVisible = (state: ComboboxState) =>
  visibleStates.includes(state)

// Detect when to call onOpen and onClose
export function useComboboxToggle<
  TOption extends ComboboxOptionType = MaybeComboboxOptionObject
>(
  state: ComboboxState,
  option: TOption,
  onOpen?: ComboboxCallback<TOption>,
  onClose?: ComboboxCallback<TOption>
) {
  const isVisible = getIsVisible(state)
  const isVisibleRef = useRef(isVisible)

  useEffect(() => {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(option)
      isVisibleRef.current = true
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(option)
      isVisibleRef.current = false
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, option])

  return isVisible
}
