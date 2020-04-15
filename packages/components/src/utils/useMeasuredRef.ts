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
import { useCallback, useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

function measureElement(element?: HTMLElement | null) {
  if (!element) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    }
  }

  return element.getBoundingClientRect()
}

export const useMeasuredRef = (ref: HTMLElement | null): ClientRect => {
  const [rect, setRect] = useState(measureElement())

  const handleResize = useCallback(() => {
    // Update client rect
    ref && setRect(measureElement(ref))
  }, [ref])

  useLayoutEffect(() => {
    if (!ref) {
      return
    }

    handleResize()
    const resizeObserver = new ResizeObserver(() => handleResize())
    if (ref) {
      resizeObserver.observe((ref as unknown) as HTMLElement)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (!resizeObserver) {
        return
      }

      resizeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, ref])

  return rect
}
