/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import type { Ref, MutableRefObject } from 'react'
import { useMemo } from 'react'

export type RefToFork<E> = Ref<E> | MutableRefObject<E> | undefined

function assignRef<E extends HTMLElement>(ref: RefToFork<E>, value: E | null) {
  if (!ref) return
  if (typeof ref === 'function') {
    ref(value)
  } else {
    try {
      ;(ref as MutableRefObject<E | null>).current = value
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`)
    }
  }
}

export function useForkedRef<E extends HTMLElement>(...refs: RefToFork<E>[]) {
  return useMemo(() => {
    return (node: E | null) => {
      refs.forEach(ref => {
        assignRef(ref, node)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)
}
