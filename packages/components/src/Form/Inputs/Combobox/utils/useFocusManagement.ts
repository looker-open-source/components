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

import { useLayoutEffect } from 'react'
import { useCallbackRef } from '../../../../utils'
import { ComboboxActionType } from './state'

// Move focus back to the input if we start navigating w/ the
// keyboard after focus has moved to any focus-able content in
// the popup.

export function useFocusManagement(lastActionType?: ComboboxActionType) {
  const [inputElement, inputCallbackRef] = useCallbackRef<HTMLInputElement>()
  // useLayoutEffect so that the cursor goes to the end of the input instead
  // of awkwardly at the beginning, unclear to my why ...
  useLayoutEffect(() => {
    if (
      lastActionType === ComboboxActionType.NAVIGATE ||
      lastActionType === ComboboxActionType.ESCAPE ||
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
