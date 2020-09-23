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
import pick from 'lodash/pick'
import { useContext, useEffect, useRef } from 'react'
import { DialogContext } from '../Dialog/DialogContext'
import { useToggle } from './useToggle'
import { useCallbackRef } from './useCallbackRef'

// useScrollLock takes a two-pronged approach to disabling scrolling:
// 1. Add a listener on the scroll event that scrolls back up to to the existing scroll position
// 2. Add overflow: hidden to the body tag which solves the stutter effect from the above
//    A padding-right offset fixes a jump due to a body-level scrollbar toggling on/off
// Note: #2 alone is not enough because (especially for popovers) there may be other
// scrolling elements that should be locked

function getScrollbarSize() {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.width = '99px'
  scrollDiv.style.height = '99px'
  scrollDiv.style.position = 'absolute'
  scrollDiv.style.top = '-9999px'
  scrollDiv.style.overflow = 'scroll'

  document.body.appendChild(scrollDiv)
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)

  return scrollbarSize
}

function setBodyStyle() {
  if (document !== undefined) {
    // Is there a vertical scrollbar?
    if (window.innerWidth > document.documentElement.clientWidth) {
      const scrollbarSize = getScrollbarSize()
      const curPaddingRight = window
        .getComputedStyle(document.body)
        .getPropertyValue('padding-right')
      if (curPaddingRight.indexOf('calc') === -1) {
        document.body.style.paddingRight = `calc(${curPaddingRight} + ${scrollbarSize}px)`
      }
    }
    document.body.style.overflow = 'hidden'
  }
}

type BodyStyle = Pick<CSSStyleDeclaration, 'overflow' | 'paddingRight'> | null

function getCurrentBodyStyle(existingScrollLock?: boolean): BodyStyle {
  if (document === undefined || existingScrollLock) {
    // If there is an existing scroll lock (e.g. popover within a dialog)
    // no need to store styles,
    return null
  }
  return pick(document.body.style, ['overflow', 'paddingRight'])
}

function resetBodyStyle(style: BodyStyle) {
  if (style) {
    document.body.style.paddingRight = style.paddingRight
    document.body.style.overflow = style.overflow
  }
}

export function useScrollLock(
  enabled = false,
  useCapture = false,
  allowScrollWithin?: HTMLElement | null
) {
  const [newElement, callbackRef] = useCallbackRef()
  // If the allowScrollWithin is passed in arguments, use that instead of the new element
  const element =
    allowScrollWithin === undefined ? newElement : allowScrollWithin
  const { disableScrollLock, enableScrollLock, scrollLockEnabled } = useContext(
    DialogContext
  )
  const { value, setOn, setOff } = useToggle(enabled)

  useEffect(() => {
    if (document === undefined || window === undefined) return

    let scrollTop = window.scrollY
    let scrollTarget: EventTarget | HTMLElement | null = document

    const setBodyStyleOnce = once(setBodyStyle)

    function stopScroll(e: Event) {
      // setting overflow: hidden / padding-right again here avoids conflicting
      // enable / disable with nested scroll locks
      setBodyStyleOnce()

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
    } else {
      window.removeEventListener('scroll', stopScroll, true)
      enableScrollLock && enableScrollLock()
    }

    return () => {
      window.removeEventListener('scroll', stopScroll, true)
    }
  }, [value, element, useCapture, disableScrollLock, enableScrollLock])

  // Save the existing body overflow and padding-right values
  const bodyStylesRef = useRef(getCurrentBodyStyle(scrollLockEnabled))

  useEffect(() => {
    const bodyStylesCurrent = bodyStylesRef.current
    if (value) {
      setBodyStyle()
    } else {
      resetBodyStyle(bodyStylesCurrent)
      bodyStylesRef.current = getCurrentBodyStyle(scrollLockEnabled)
    }
    return () => {
      if (value) {
        resetBodyStyle(bodyStylesCurrent)
      }
    }
  }, [scrollLockEnabled, value])

  return {
    callbackRef,
    disable: setOff,
    element: element || null,
    enable: setOn,
    isEnabled: value,
  }
}
