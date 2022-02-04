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

import pick from 'lodash/pick'
import type { Trap } from '../TrapStack/types'

export interface ScrollLockMap {
  [key: string]: HTMLElement
}

function getScrollBarWidth() {
  // Add a hidden scrolling div to the page to get the width of a scrollbar
  const scrollDiv = document.createElement('div')
  scrollDiv.style.width = '99px'
  scrollDiv.style.height = '99px'
  scrollDiv.style.position = 'absolute'
  scrollDiv.style.top = '-9999px'
  scrollDiv.style.overflow = 'scroll'

  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)

  return scrollbarWidth
}

// For the purposes of scroll lock, we're only interested in
// the overflow and paddingRight properties
type BodyStyle = Pick<CSSStyleDeclaration, 'overflow' | 'paddingRight'> | null

function getBodyCurrentStyle(): BodyStyle {
  return document !== undefined
    ? pick(document.body.style, ['overflow', 'paddingRight'])
    : null
}

function setBodyStyles() {
  if (document !== undefined) {
    // Is there a vertical scrollbar?
    if (window.innerWidth > document.documentElement.clientWidth) {
      const scrollbarWidth = getScrollBarWidth()
      const curPaddingRight = window
        .getComputedStyle(document.body)
        .getPropertyValue('padding-right')
      if (curPaddingRight.indexOf('calc') === -1) {
        document.body.style.paddingRight = `calc(${curPaddingRight} + ${scrollbarWidth}px)`
      }
    }
    document.body.style.overflow = 'hidden'
  }
}

function resetBodyStyles(previousStyle: BodyStyle) {
  if (previousStyle) {
    document.body.style.paddingRight = previousStyle.paddingRight
    document.body.style.overflow = previousStyle.overflow
  }
}

export function activateScrollLock({ element }: Trap) {
  let scrollTop = window.scrollY
  let scrollTarget: EventTarget | HTMLElement | null = document

  // Handler for scroll event is needed since body overflow: hidden
  // won't stop other scroll-able elements from scrolling
  function stopScroll(e: Event) {
    if (e.target !== null && e.target !== scrollTarget) {
      // If the user has started scrolling in a new scroll-able element
      // we need to update the stored scroll top position
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
      // Scroll event can't actually be prevented so instead we
      // scroll the window back to the stored position
      window.scrollTo({ top: scrollTop })
    }
  }

  const previousStyle = getBodyCurrentStyle()

  setBodyStyles()
  window.addEventListener('scroll', stopScroll, true)

  return () => {
    window.removeEventListener('scroll', stopScroll, true)
    resetBodyStyles(previousStyle)
  }
}
