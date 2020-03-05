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

import createFocusTrap, { FocusTrap } from 'focus-trap'
import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../Modal/ModalContext'
import { useToggle } from './useToggle'
import { useCallbackRef } from './useCallbackRef'

function checkFocusLost() {
  // If focused landed on body or nothing, return it to previous element
  // otherwise it's probably already on something useful/intentional
  return document.activeElement
    ? document.activeElement.tagName === 'BODY'
    : true
}

export function useFocusTrap(
  enabled = true,
  keepFocusWithin?: HTMLElement | null
) {
  const trapRef = useRef<FocusTrap>()

  const [newElement, callbackRef] = useCallbackRef()
  // If the keepFocusWithin is passed in arguments, use that instead of the new element
  const element =
    typeof keepFocusWithin === 'undefined' ? newElement : keepFocusWithin
  const { disableFocusTrap, enableFocusTrap } = useContext(ModalContext)
  const { value, setOn, setOff } = useToggle(enabled)

  useEffect(() => {
    if (element && value) {
      const autoFocusElement = element.querySelector(
        '[data-autofocus="true"]'
      ) as HTMLElement
      trapRef.current = createFocusTrap(element, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        fallbackFocus: element,
        onDeactivate: () => setOff(),
        ...(autoFocusElement ? { initialFocus: autoFocusElement } : {}),
      })
      disableFocusTrap && disableFocusTrap()
      // Wait for any other focus trap to complete deactivation
      window.setTimeout(() => trapRef.current && trapRef.current.activate(), 0)
    } else {
      trapRef.current &&
        trapRef.current.deactivate({ returnFocus: checkFocusLost() })
      enableFocusTrap && enableFocusTrap()
    }

    return () => {
      trapRef.current &&
        trapRef.current.deactivate({ returnFocus: checkFocusLost() })
    }
  }, [value, element, disableFocusTrap, enableFocusTrap, setOff])

  return {
    callbackRef,
    disable: setOff,
    element: element || null,
    enable: setOn,
    isEnabled: value,
    trapRef,
  }
}
