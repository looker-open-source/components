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
import React, { FC, useRef, useMemo } from 'react'
import { ScrollLockContext } from './ScrollLockContext'
import { activateScrollLock, getActiveScrollLock, ScrollLockMap } from './utils'

export const ScrollLockProvider: FC = ({ children }) => {
  // stores all available scroll locks
  // (map of ids to elements where scrolling is to be allowed)
  const registeredLocksRef = useRef<ScrollLockMap>({})
  // stores the current element where scrolling is allowed
  // null if no scroll lock is active
  const activeLockRef = useRef<HTMLElement | null>(null)
  // stores the callback to remove the scroll event listener & restore body styles
  const deactivateRef = useRef<() => void>(noop)

  // useMemo: this component probably won't re-render much, but if it does
  // let's not cause unnecessary diffs from useScrollLock in Dialogs and Popovers
  // since those components can be finicky if re-rendered at the wrong moment
  const value = useMemo(() => {
    function getLock(id?: string): HTMLElement | null {
      const registeredLocks = registeredLocksRef.current
      return id
        ? registeredLocks[id] || null
        : getActiveScrollLock(registeredLocks)
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
      deactivateRef.current = noop
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

    return {
      activeLockRef,
      addLock,
      disableCurrentLock,
      enableCurrentLock,
      getLock,
      removeLock,
    }
  }, [])

  return (
    <ScrollLockContext.Provider value={value}>
      {children}
    </ScrollLockContext.Provider>
  )
}
