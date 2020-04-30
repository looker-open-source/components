/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import omit from 'lodash/omit'
import React, { useContext, useMemo, useEffect } from 'react'
import { useWindowedListBoundaries } from '../../../../utils/useWindowedListBoundaries'
import { ListItem } from '../../../../List'
import {
  ComboboxContext,
  ComboboxMultiContext,
  ComboboxOptionObject,
} from '../../Combobox'
import {
  SelectOptionProps,
  SelectOptionGroupProps,
  SelectOptionObject,
} from '../SelectOptions'

export const optionHeight = 28

export function useWindowedOptions(
  windowOptions: boolean,
  options?: SelectOptionProps[],
  isMulti?: boolean
) {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const {
    data: { navigationOption },
    listClientRect,
    listScrollPosition,
    optionsRef,
  } = contextToUse

  // windowOptions prop disables useAddOptionToContext,
  // so we need to add it here to support keyboard nav

  // Flatten & convert options to ComboboxOptionObject for TS and to warn if groups are used
  const optionsToWindow = useMemo(() => {
    if (windowOptions && options) {
      const flatOptions: ComboboxOptionObject[] = []
      const ableToVirtualize = options.every((option) => {
        if ((option as SelectOptionGroupProps).options) {
          return false
        }
        flatOptions.push(omit(option as SelectOptionObject, 'description'))
        return true
      })
      if (ableToVirtualize) {
        return flatOptions
      }
    }
    return []
  }, [options, windowOptions])

  // add options to ComboboxContext.optionsRef
  useEffect(() => {
    // optionsToWindow will be empty if windowOptions is false, so no need to check windowOptions as well
    if (optionsToWindow.length > 0 && options && optionsRef) {
      optionsRef.current = optionsToWindow
    }
  }, [options, optionsRef, optionsToWindow])

  // Get the windowed list boundaries and spacers
  const { start, end } = useWindowedListBoundaries({
    containerHeight: listClientRect && listClientRect.height,
    containerScrollPosition: listScrollPosition,
    enabled: windowOptions,
    itemHeight: optionHeight,
    length: options ? options.length : 0,
  })

  // If the user keyboard navigates "down" from the last option or "up" from the first option
  // we need to force-render the top or bottom of the list and scroll there
  let scrollToFirst = false
  let scrollToLast = false
  if (
    windowOptions &&
    optionsToWindow &&
    optionsToWindow.length &&
    navigationOption
  ) {
    scrollToFirst =
      start > 0 && navigationOption.value === optionsToWindow[0].value
    scrollToLast =
      end < optionsToWindow.length - 1 &&
      navigationOption.value ===
        optionsToWindow[optionsToWindow.length - 1].value
  }
  const afterLength = options ? options.length - 1 - end : 0

  return {
    after:
      afterLength > 0 ? <ListItem height={afterLength * optionHeight} /> : null,
    before: start > 0 ? <ListItem height={start * optionHeight} /> : null,
    end,
    scrollToFirst,
    scrollToLast,
    start,
  }
}
