/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import { useRef } from 'react'
import { useCallbackRef } from '../../../../utils'
import type { ComboboxOptionObject } from '../types'

export function useComboboxRefs(forwardedRef: Ref<HTMLDivElement>) {
  // Need this to get the menu width
  const [wrapperElement, ref] = useCallbackRef<HTMLDivElement>(forwardedRef)
  // We store the values of all the ComboboxOptions on this ref. This makes it
  // possible to perform the keyboard navigation from the input on the list. We
  // manipulate this array through context so that we don't have to enforce a
  // parent/child relationship between ComboboxList and ComboboxOption with
  // cloneElement or fall back to DOM traversal. It's a new trick for me and
  // I'm pretty excited about it.
  const optionsRef = useRef<ComboboxOptionObject[]>([])

  const listRef = useRef<HTMLElement | null>(null)

  // When <ComboboxInput autoComplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autoCompletePropRef = useRef(true)
  const inputReadOnlyPropRef = useRef(false)

  const persistSelectionPropRef = useRef(false)
  const closeOnSelectPropRef = useRef(true)
  const windowingPropRef = useRef(false)
  const isScrollingRef = useRef(false)
  const indicatorPropRef = useRef(false)
  const freeInputPropRef = useRef(false)

  return {
    autoCompletePropRef,
    closeOnSelectPropRef,
    freeInputPropRef,
    indicatorPropRef,
    inputReadOnlyPropRef,
    isScrollingRef,
    listRef,
    optionsRef,
    persistSelectionPropRef,
    ref,
    windowingPropRef,
    wrapperElement,
  }
}
