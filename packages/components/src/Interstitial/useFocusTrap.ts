/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import createFocusTrap, { FocusTrap } from 'focus-trap'
import { useContext, useEffect, useRef } from 'react'
import { useToggle } from '../utils/useToggle'
import { useCallbackRef } from '../utils/useCallbackRef'
import { InterstitialContext } from './InterstitialContext'

export interface UseFocusOptions {
  escapeDeactivates?: boolean
  clickOutsideDeactivates?: boolean
}

export function useFocusTrap(enabled = true, keepFocusWithin?: HTMLElement) {
  const trap = useRef<FocusTrap>()

  const [element, callbackRef] = useCallbackRef(keepFocusWithin)
  const { disableFocusTrap, enableFocusTrap } = useContext(InterstitialContext)
  const { value, setOn, setOff } = useToggle(enabled)

  useEffect(() => {
    if (element && value) {
      const autoFocusElement = element.querySelector(
        '[data-autofocus="true"]'
      ) as HTMLElement
      trap.current = createFocusTrap(element, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        fallbackFocus: element,
        ...(autoFocusElement ? { initialFocus: autoFocusElement } : {}),
      })
      disableFocusTrap && disableFocusTrap()
      // Wait for any other focus trap to complete deactivation
      window.setTimeout(() => trap.current && trap.current.activate(), 0)
    } else {
      trap.current && trap.current.deactivate()
      enableFocusTrap && enableFocusTrap()
    }

    return () => {
      trap.current && trap.current.deactivate()
    }
  }, [value, element, disableFocusTrap, enableFocusTrap])

  return {
    callbackRef,
    disable: setOff,
    element: element || null,
    enable: setOn,
    isEnabled: value,
  }
}
