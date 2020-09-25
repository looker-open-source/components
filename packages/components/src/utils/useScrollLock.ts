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

import { useContext, useEffect, useRef } from 'react'
import { DialogContext } from '../Dialog/DialogContext'
import { useToggle } from './useToggle'
import { useCallbackRef } from './useCallbackRef'

function isAtScrollBottom(
  targetElement: EventTarget | HTMLElement | null
): boolean {
  return targetElement instanceof Element
    ? targetElement.scrollHeight - targetElement.scrollTop <=
        targetElement.clientHeight
    : false
}
function isAtScrollTop(
  targetElement: EventTarget | HTMLElement | null
): boolean {
  return targetElement instanceof Element
    ? targetElement.scrollTop === 0
    : false
}

const scrollKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

// modern Chrome requires { passive: false } when adding event
function getWheelOpt() {
  let supportsPassive = false
  try {
    window.addEventListener(
      'canplay',
      () => null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true
        },
      })
    )
  } catch (e) {
    //
  }
  return supportsPassive ? { passive: false } : false
}

const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

/**
 * Adds listeners to preventDefault on various events that are pre-cursors to the scroll event
 * If a parent DialogContext is found (used in Popover and Dialog) the scroll lock for that context will be
 * disabled when the current scroll lock is enabled and vice versa
 * @param enabled toggles the scroll lock on & off
 * @param allowScrollWithin an element where scrolling should be allowed
 */
export function useScrollLock(
  enabled = false,
  allowScrollWithin?: HTMLElement | null
) {
  const [newElement, callbackRef] = useCallbackRef()
  // If the allowScrollWithin is passed in arguments, use that instead of the new element
  const element =
    allowScrollWithin === undefined ? newElement : allowScrollWithin
  const { disableScrollLock, enableScrollLock } = useContext(DialogContext)
  const { value, setOn, setOff } = useToggle(enabled)
  const letScrollInElement = useRef(true)

  useEffect(() => {
    if (document === undefined || window === undefined) return

    function preventDefault(e: Event) {
      console.log('prev')
      e.preventDefault()
    }

    function stopPropagation(e: Event) {
      if (letScrollInElement.current) {
        e.stopPropagation()
      }
    }

    function preventDefaultForScrollKeys(e: KeyboardEvent) {
      if (scrollKeys.includes(e.key)) {
        preventDefault(e)
      }
    }

    let scrollTop = window.scrollY
    let scrollTarget: EventTarget | HTMLElement | null = document
    let lastScrollPos = window.scrollY
    let scrollingDirection = 0

    function stopScroll(e: Event) {
      if (e.target !== null && e.target !== scrollTarget) {
        scrollTarget = e.target
        scrollTop =
          scrollTarget instanceof Element
            ? scrollTarget.scrollTop
            : window.scrollY

        lastScrollPos = scrollTop
      } else {
        const newScrollPos =
          scrollTarget instanceof Element
            ? scrollTarget.scrollTop
            : window.scrollY
        scrollingDirection = newScrollPos - lastScrollPos
        lastScrollPos = newScrollPos
      }
      if (
        scrollTarget instanceof Element &&
        !(element && element.contains(scrollTarget))
      ) {
        scrollTarget.scrollTop = scrollTop
      } else if (scrollTarget === document) {
        window.scrollTo({ top: scrollTop })
      } else {
        if (scrollingDirection > 0) {
          const atScrollBottom = isAtScrollBottom(scrollTarget)
          letScrollInElement.current = !atScrollBottom
          if (atScrollBottom) {
            scrollingDirection = 0
          }
        } else if (scrollingDirection < 0) {
          const atScrollTop = isAtScrollTop(scrollTarget)
          letScrollInElement.current = !atScrollTop
          if (atScrollTop) {
            scrollingDirection = 0
          }
        }
      }
    }

    function disableScroll(element: HTMLElement) {
      const wheelOpt = getWheelOpt()
      window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
      element.addEventListener(wheelEvent, stopPropagation, wheelOpt) // modern desktop
      window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false)
      window.addEventListener('scroll', stopScroll, true)
    }

    function enableScroll() {
      window.removeEventListener('DOMMouseScroll', preventDefault, false)
      window.removeEventListener(wheelEvent, preventDefault)
      window.removeEventListener('touchmove', preventDefault)
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
      window.removeEventListener('scroll', stopScroll, true)
    }

    if (element && value) {
      disableScrollLock && disableScrollLock()
      disableScroll(element)
    } else {
      enableScrollLock && enableScrollLock()
      enableScroll()
    }

    return () => {
      enableScroll()
    }
  }, [value, element, disableScrollLock, enableScrollLock])

  return {
    callbackRef,
    disable: setOff,
    element: element || null,
    enable: setOn,
    isEnabled: value,
  }
}
