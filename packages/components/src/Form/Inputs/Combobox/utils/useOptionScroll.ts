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

import { Context, useContext, useEffect } from 'react'
import { useCallbackRef } from '../../../../utils'
import {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import { ComboboxActionType } from './state'

// calculate an element's visibility relative to the menu scroll position
// returns `visible`, `above`, or `below`
const relativeElementVisibility = (
  listElement: HTMLElement,
  containerScrollPosition: number,
  containerHeight = 0
) => {
  const { offsetTop } = listElement
  const isAbove = offsetTop < containerScrollPosition
  const isBelow = offsetTop > containerScrollPosition + containerHeight
  return (isAbove && 'above') || (isBelow && 'below') || 'visible'
}

export function useOptionScroll<
  CProps extends ComboboxContextProps | ComboboxMultiContextProps
>(
  context: Context<CProps>,
  value: string,
  label?: string,
  scrollIntoView?: boolean,
  isActive?: boolean
) {
  const {
    transition,
    listScrollPosition = 0,
    listClientRect = { height: 0 },
  } = useContext(context)
  /* scroll menu list to specified element on mount */
  const [newTriggerElement, callbackRef] = useCallbackRef()
  useEffect(() => {
    if (scrollIntoView) {
      if (newTriggerElement) {
        newTriggerElement.scrollIntoView()
      }
      if (!isActive) {
        transition &&
          transition(ComboboxActionType.NAVIGATE, {
            option: { label, value },
          })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTriggerElement, scrollIntoView])

  /* scroll menu while keyboard navigating */
  useEffect(() => {
    if (isActive && newTriggerElement) {
      const visibility = relativeElementVisibility(
        newTriggerElement,
        listScrollPosition,
        listClientRect.height
      )
      if (visibility !== 'visible') {
        const attachToTop = visibility === 'above'
        newTriggerElement.scrollIntoView(attachToTop) // false scrolls to bottom, true scrolls to top
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTriggerElement, isActive])

  return callbackRef
}
