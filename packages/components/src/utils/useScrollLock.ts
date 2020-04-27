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

import once from 'lodash/once'
import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../Modal/ModalContext'
import { useToggle } from './useToggle'
import { useCallbackRef } from './useCallbackRef'

function setBodyOverflowHidden() {
  document.body.style.overflow = 'hidden'
}

export function useScrollLock(
  enabled = false,
  useCapture = false,
  allowScrollWithin?: HTMLElement | null
) {
  const [newElement, callbackRef] = useCallbackRef()
  // If the keepFocusWithin is passed in arguments, use that instead of the new element
  const element =
    typeof allowScrollWithin === 'undefined' ? newElement : allowScrollWithin
  const { disableScrollLock, enableScrollLock } = useContext(ModalContext)
  const { value, setOn, setOff } = useToggle(enabled)

  // save the existing body overflow value
  const bodyOverflowRef = useRef(document.body.style.overflow)

  useEffect(() => {
    let scrollTop = window.scrollY
    let scrollTarget: EventTarget | HTMLElement | null = document

    const bodyOverflowCurrent = bodyOverflowRef.current
    const setBodyOverflowOnce = once(setBodyOverflowHidden)

    function stopScroll(e: Event) {
      // setting overflow: hidden again here avoids conflicting enable / disable with nested scroll locks
      setBodyOverflowOnce()

      if (e.target !== null && e.target !== scrollTarget) {
        scrollTarget = e.target
        scrollTop =
          scrollTarget instanceof Element
            ? scrollTarget.scrollTop
            : window.scrollY
      }
      if (
        scrollTarget instanceof Element &&
        !(element && element.contains(scrollTarget))
      ) {
        scrollTarget.scrollTop = scrollTop
      } else if (scrollTarget === document) {
        window.scrollTo({ top: scrollTop })
      }
    }

    if (element && value) {
      window.addEventListener('scroll', stopScroll, true)
      disableScrollLock && disableScrollLock()
      setBodyOverflowHidden()
    } else {
      window.removeEventListener('scroll', stopScroll, true)
      enableScrollLock && enableScrollLock()
      document.body.style.overflow = bodyOverflowCurrent
    }

    return () => {
      window.removeEventListener('scroll', stopScroll, true)
      document.body.style.overflow = bodyOverflowCurrent
    }
  }, [value, element, useCapture, disableScrollLock, enableScrollLock])

  return {
    callbackRef,
    disable: setOff,
    element: element || null,
    enable: setOn,
    isEnabled: value,
  }
}
