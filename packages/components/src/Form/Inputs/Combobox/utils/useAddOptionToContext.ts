/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Context } from 'react'
import { useEffect, useRef, useContext } from 'react'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'

export function useAddOptionToContext<
  CProps extends ComboboxContextProps | ComboboxMultiContextProps
>(
  context: Context<CProps>,
  value: string,
  label?: string,
  scrollIntoView?: boolean
) {
  const { optionsRef, windowingPropRef } = useContext(context)
  const indexRef = useRef<number>(-1)

  useEffect(() => {
    const option = { label, scrollIntoView, value }
    const optionsRefCurrent = optionsRef && optionsRef.current
    const windowing = windowingPropRef && windowingPropRef.current
    if (optionsRefCurrent && !windowing) {
      // Was this option already in the list?
      // If so, re-insert it at the same spot
      if (indexRef.current > -1) {
        optionsRefCurrent.splice(indexRef.current, 0, option)
      } else {
        optionsRefCurrent.push(option)
      }
    }
    return () => {
      // Delete option from the array but save the index so it can be re-inserted there
      if (optionsRefCurrent && !windowing) {
        const index = optionsRefCurrent.indexOf(option)
        indexRef.current = index
        optionsRefCurrent.splice(index, 1)
      }
    }
  }, [value, label, optionsRef, scrollIntoView, windowingPropRef])
}
