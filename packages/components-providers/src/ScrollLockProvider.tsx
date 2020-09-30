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

import noop from 'lodash/noop'
import pick from 'lodash/pick'
import React, {
  createContext,
  ReactNode,
  useRef,
  MutableRefObject,
} from 'react'

function getNodesOrder(nodeA: Node, nodeB: Node) {
  const relationship = nodeA.compareDocumentPosition(nodeB)
  return relationship > 3 ? 1 : -1
}

export interface ScrollLockContextProps {
  activeLockRef?: MutableRefObject<HTMLElement | null>
  addLock?: (id: string, element: HTMLElement) => void
  disableCurrentLock?: () => void
  enableCurrentLock?: () => void
  getLock?: (id: string) => HTMLElement | undefined
  removeLock?: (id: string) => void
}

export const ScrollLockContext = createContext<ScrollLockContextProps>({})

export interface ScrollLockMap {
  [key: string]: HTMLElement
}

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

function getActiveScrollLock(lockMap: ScrollLockMap) {
  const sortedElements = Object.values(lockMap).sort((elementA, elementB) => {
    return getNodesOrder(elementA, elementB)
  })
  return sortedElements[0] || null
}

function activateScrollLock(element: HTMLElement) {
  let scrollTop = window.scrollY
  let scrollTarget: EventTarget | HTMLElement | null = document

  function stopScroll(e: Event) {
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

  const currentStyles = getBodyCurrentStyle()

  setBodyStyles()
  window.addEventListener('scroll', stopScroll, true)

  return () => {
    window.removeEventListener('scroll', stopScroll, true)
    resetBodyStyles(currentStyles)
  }
}

export function ScrollLockProvider({ children }: { children: ReactNode }) {
  const registeredLocksRef = useRef<ScrollLockMap>({})
  // tracks the current element where scrolling is allowed
  // null if no scroll lock is active
  const activeLockRef = useRef<HTMLElement | null>(null)
  // stores the callback to remove the event listener and restore body styles
  const deactivateRef = useRef<() => void>(noop)

  function getLock(id?: string) {
    const registeredLocks = registeredLocksRef.current
    return id ? registeredLocks[id] : getActiveScrollLock(registeredLocks)
  }

  function enableCurrentLock() {
    const newElement = getLock()
    if (newElement !== activeLockRef.current) {
      // Disable the existing scroll lock and update the element
      activeLockRef.current = newElement
      deactivateRef.current()
      // If there's a new element, activate a new scroll lock
      if (newElement) {
        deactivateRef.current = activateScrollLock(newElement)
      }
    }
  }

  function disableCurrentLock() {
    deactivateRef.current()
    activeLockRef.current = null
  }

  function addLock(id: string, element: HTMLElement) {
    registeredLocksRef.current[id] = element
    enableCurrentLock()
  }

  function removeLock(id: string) {
    const existingLock = getLock(id)
    if (existingLock) {
      const registeredLocks = registeredLocksRef.current
      delete registeredLocks[id]
      enableCurrentLock()
    }
  }

  return (
    <ScrollLockContext.Provider
      value={{
        activeLockRef,
        addLock,
        disableCurrentLock,
        enableCurrentLock,
        getLock,
        removeLock,
      }}
    >
      {children}
    </ScrollLockContext.Provider>
  )
}
