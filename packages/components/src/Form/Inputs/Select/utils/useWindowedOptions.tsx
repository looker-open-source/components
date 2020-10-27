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

import findIndex from 'lodash/findIndex'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { getWindowedListBoundaries } from '../../../../utils/getWindowedListBoundaries'
import { ComboboxContext, ComboboxMultiContext } from '../../Combobox'
import {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../SelectOptions'

export const optionHeight = 28

export function useShouldWindowOptions(
  options?: SelectOptionProps[],
  propsWindowedOptions?: boolean
) {
  return useMemo(() => {
    if (!options) return false
    if (propsWindowedOptions === false) return false
    // Without windowedOptions prop, default is to turn it on at 100 options
    if (options.length < 100 && !propsWindowedOptions) return false
    // But we can't use windowedOptions if there are groups
    const groupedOptions = options.find(
      (option) => (option as SelectOptionGroupProps).options !== undefined
    )
    if (groupedOptions) {
      if (propsWindowedOptions) {
        // If the windowedOptions prop is true but there are groups, give a warning
        /* eslint-disable-next-line no-console */
        console.warn(
          'The `windowedOptions` prop does not support grouped options.'
        )
      }
      return false
    }
    return true
  }, [options, propsWindowedOptions])
}

export function useWindowedOptions(
  windowedOptions?: boolean,
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

  // windowedOptions prop on ComboboxList disables useAddOptionToContext,
  // so we need to add it here to support keyboard nav

  // Let TS know we have no grouped options (making it valid to assign to optionsRef)
  const flatOptions = options as SelectOptionObject[]

  // add options to ComboboxContext.optionsRef
  useEffect(() => {
    // optionsToWindow will be empty if windowedOptions is false, so no need to check windowedOptions as well
    if (
      windowedOptions &&
      flatOptions &&
      flatOptions.length > 0 &&
      optionsRef
    ) {
      optionsRef.current = [...flatOptions]
    }
  }, [flatOptions, optionsRef, windowedOptions])

  // Get the windowed list boundaries
  const containerHeight = listClientRect && listClientRect.height
  let { start, end } = useMemo(
    () =>
      getWindowedListBoundaries({
        containerHeight,
        containerScrollPosition: listScrollPosition,
        enabled: windowedOptions,
        itemHeight: optionHeight,
        length: flatOptions ? flatOptions.length : 0,
      }),
    [flatOptions, containerHeight, listScrollPosition, windowedOptions]
  )

  // The current value is highlighted when the menu first opens
  // but it may be outside the windowed options
  // so we start the list with just that option
  // also need to do this when the menu goes from un-windowed to windowed
  // (e.g. due to deleting characters when filtering)
  const previouslyWindowedRef = useRef<boolean>()
  if (windowedOptions && !previouslyWindowedRef.current) {
    if (navigationOption) {
      const selectedIndex = findIndex(options, [
        'value',
        navigationOption.value,
      ])
      if (selectedIndex > -1) {
        start = selectedIndex
        end = selectedIndex
      }
    }
  }
  previouslyWindowedRef.current = windowedOptions

  // If the user keyboard navigates "down" from the last option or "up" from the first option
  // we need to render the top or bottom of the list (which are outside our "window") and scroll there
  let scrollToFirst = false
  let scrollToLast = false
  if (
    windowedOptions &&
    flatOptions &&
    flatOptions.length &&
    navigationOption
  ) {
    scrollToFirst = start > 0 && navigationOption.value === flatOptions[0].value
    scrollToLast =
      end < flatOptions.length - 1 &&
      navigationOption.value === flatOptions[flatOptions.length - 1].value
  }
  const afterLength = flatOptions ? flatOptions.length - 1 - end : 0

  return {
    // after & before are spacers to make scrolling smooth
    after:
      afterLength > 0 ? (
        <li style={{ height: `${afterLength * optionHeight}px` }} />
      ) : null,
    before:
      start > 0 ? <li style={{ height: `${start * optionHeight}px` }} /> : null,
    end,
    scrollToFirst,
    scrollToLast,
    start,
  }
}
