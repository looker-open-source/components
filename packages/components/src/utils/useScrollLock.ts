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

function setBodyStyles() {
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

function getBodyCurrentStyle() {
  return document !== undefined
    ? pick(document.body.style, ['overflow', 'paddingRight'])
    : null
}

type BodyStyle = Pick<CSSStyleDeclaration, 'overflow' | 'paddingRight'> | null
function resetBodyStyles(style: BodyStyle) {
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
  // If the keepFocusWithin is passed in arguments, use that instead of the new element
  const element =
    allowScrollWithin === undefined ? newElement : allowScrollWithin
  const { disableScrollLock, enableScrollLock } = useContext(DialogContext)
  const { value, setOn, setOff } = useToggle(enabled)

  // save the existing body overflow value
  const bodyStylesRef = useRef(getBodyCurrentStyle())

  useEffect(() => {
    if (document === undefined || window === undefined) return

    let scrollTop = window.scrollY
    let scrollTarget: EventTarget | HTMLElement | null = document

    const bodyStylesCurrent = bodyStylesRef.current
    const setBodyStylesOnce = once(setBodyStyles)

    function stopScroll(e: Event) {
      // setting overflow: hidden again here avoids conflicting enable / disable with nested scroll locks
      setBodyStylesOnce()

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
      setBodyStyles()
    } else {
      window.removeEventListener('scroll', stopScroll, true)
      enableScrollLock && enableScrollLock()
      resetBodyStyles(bodyStylesCurrent)
    }

    return () => {
      window.removeEventListener('scroll', stopScroll, true)
      if (value) {
        resetBodyStyles(bodyStylesCurrent)
      } else {
        bodyStylesRef.current = getBodyCurrentStyle()
      }
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
