/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { FlatOption, SelectOptionObject } from '../types'

export const optionHeight = 28

export function useShouldWindowOptions(
  flatOptions?: FlatOption[],
  propsWindowedOptions?: boolean
) {
  return useMemo(() => {
    if (!flatOptions) return false
    if (propsWindowedOptions === false) return false
    // Without windowing prop, default is to turn it on at 100 options
    if (flatOptions.length < 100 && !propsWindowedOptions) return false
    return true
  }, [flatOptions, propsWindowedOptions])
}

export function useWindowedOptions(
  windowing?: boolean,
  flatOptions?: FlatOption[],
  navigationOptions?: SelectOptionObject[],
  isMulti?: boolean
) {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const {
    data: { navigationOption },
    listClientRect,
    listScrollPosition,
    isScrollingRef,
    optionsRef,
  } = contextToUse

  // windowing prop on ComboboxList disables useAddOptionToContext,
  // so we need to add it here to support keyboard nav

  // add options to ComboboxContext.optionsRef
  useEffect(() => {
    // optionsToWindow will be empty if windowing is false, so no need to check windowing as well
    if (navigationOptions?.length && optionsRef) {
      optionsRef.current = navigationOptions
    }
  }, [navigationOptions, optionsRef])

  // Get the windowed list boundaries
  const containerHeight = listClientRect && listClientRect.height
  let { start, end } = useMemo(
    () =>
      getWindowedListBoundaries({
        enabled: windowing,
        height: containerHeight,
        itemCount: flatOptions ? flatOptions.length : 0,
        itemHeight: optionHeight,
        scrollPosition: listScrollPosition,
      }),
    [flatOptions, containerHeight, listScrollPosition, windowing]
  )

  // The current value is highlighted when the menu first opens
  // but it may be outside the windowed options
  // so we start the list with just that option
  // also need to do this when the menu goes from un-windowed to windowed
  // (e.g. due to deleting characters when filtering)
  const previouslyWindowedRef = useRef<boolean>()
  if (windowing && !previouslyWindowedRef.current) {
    if (navigationOption) {
      const selectedIndex = findIndex(flatOptions, [
        'value',
        navigationOption.value,
      ])
      if (selectedIndex > -1) {
        start = selectedIndex
        end = selectedIndex
      }
    }
  }
  previouslyWindowedRef.current = windowing

  // If the user keyboard navigates "down" from the last option or "up" from the first option
  // we need to render the top or bottom of the list (which are outside our "window") and scroll there
  let scrollToFirst = false
  let scrollToLast = false
  if (flatOptions?.length && navigationOptions?.length && navigationOption) {
    scrollToFirst =
      !isScrollingRef?.current &&
      start > 0 &&
      navigationOption.value === navigationOptions[0].value
    scrollToLast =
      end < flatOptions.length - 1 &&
      navigationOption.value ===
        navigationOptions[navigationOptions.length - 1].value
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
