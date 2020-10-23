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

import { createFocusTrap, FocusTrap } from 'focus-trap'
import { useContext, useEffect, useRef } from 'react'
import { DialogContext } from '../Dialog/DialogContext'
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
  const { disableFocusTrap, enableFocusTrap } = useContext(DialogContext)
  const { value, setOn, setOff } = useToggle(enabled)

  useEffect(() => {
    function removeTrap() {
      trapRef.current &&
        trapRef.current.deactivate({ returnFocus: checkFocusLost() })
      trapRef.current = undefined
      enableFocusTrap && enableFocusTrap()
    }
    if (element && value) {
      const autoFocusElement = element.querySelector(
        '[data-autofocus="true"]'
      ) as HTMLElement

      const surfaceElement = element.querySelector(
        '[data-overlay-surface="true"]'
      ) as HTMLElement

      if (trapRef.current) {
        trapRef.current.unpause()
      } else {
        trapRef.current = createFocusTrap(element, {
          clickOutsideDeactivates: true,
          escapeDeactivates: false,
          fallbackFocus: element,
          initialFocus:
            autoFocusElement || surfaceElement
              ? () => {
                  // Check first if focus is already within the element
                  // otherwise if focus trap is disabled then re-enabled
                  // (e.g. when a Select closes inside a Dialog)
                  // focus will move unnecessarily back to the surface / autoFocus element
                  if (element.contains(document.activeElement)) {
                    return document.activeElement as HTMLElement
                  }
                  return autoFocusElement || surfaceElement
                }
              : undefined,
          onDeactivate: () => setOff(),
        })
      }
      disableFocusTrap && disableFocusTrap()
      // Wait for any other focus trap to complete deactivation
      window.setTimeout(() => trapRef.current && trapRef.current.activate(), 0)
    } else {
      if (element) {
        // If element is defined but value is false it's because of either of the following
        // a) The focus trap is being superseded by another dialog or popover
        // b) The dialog is closing and the element will be removed shortly
        // Either way we wait till the element is removed to deactivate the trap and return focus to the trigger
        trapRef.current && trapRef.current.pause()
      } else {
        removeTrap()
      }
    }

    return () => {
      if (!element || document.body.compareDocumentPosition(element) !== 20) {
        removeTrap()
      }
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
