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

import { ScrollLockContext } from '@looker/components-providers'
import { useContext, useEffect } from 'react'
import { useCallbackRef, useID } from './'

/**
 * Disable scrolling on the page except within a given element
 * returns an array containing the element and callback ref
 * @param forwardedRef optional ref to forward
 */
export const useScrollLock: typeof useCallbackRef = (forwardedRef) => {
  const id = useID()
  const [element, callbackRef] = useCallbackRef(forwardedRef)
  const { addLock, removeLock } = useContext(ScrollLockContext)

  useEffect(() => {
    if (!addLock) {
      // eslint-disable-next-line no-console
      console.warn(
        'ScrollLockContext is missing. Please wrap all @looker/components in a ComponentsProvider.'
      )
    }
  }, [addLock])

  useEffect(() => {
    if (element) {
      addLock?.(id, element)
    }
    return () => {
      removeLock?.(id)
    }
  }, [id, addLock, removeLock, element])

  return [element, callbackRef]
}
