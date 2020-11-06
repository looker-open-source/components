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

import { useState, useCallback, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

/*
 * Helper to be used in context where `text-overflow: ellipsis;` is set,
 * and you want to detect whether  text was actually cut off by browser styling.
 */

const isOverflowing = (node: HTMLElement) =>
  // hack for detecting whether text content is larger than what is rendered
  node.offsetWidth < node.scrollWidth

export const useIsTruncated = (
  element: HTMLElement | null,
  identity?: any
): boolean => {
  const [isTruncated, setIsTruncated] = useState(false)

  // Re-run truncation detection when element is resized.
  // Could run on window resize or just dom element change
  // thanks to Resize Observer.
  const handleResize = useCallback(() => {
    element && setIsTruncated(isOverflowing(element))
  }, [element])

  useLayoutEffect(() => {
    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    if (element) {
      resizeObserver.observe((element as unknown) as HTMLElement)
    }

    return () => {
      if (!resizeObserver) {
        return
      }

      resizeObserver.disconnect()
    }
  }, [handleResize, element, identity])

  return isTruncated
}
