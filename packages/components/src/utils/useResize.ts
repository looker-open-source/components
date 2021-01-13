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

import { useLayoutEffect } from 'react'
import throttle from 'lodash/throttle'
import ResizeObserver from 'resize-observer-polyfill'

/**
 * Calls the provided handler function when the element is resized
 * @param element the element to observe
 * @param handler the function to call on resize
 */
export const useResize = (element: HTMLElement | null, handler: () => void) => {
  useLayoutEffect(() => {
    const throttledHandler = throttle(handler, 100)

    if (!element) {
      return
    }

    handler()

    const resizeObserver = new ResizeObserver(() => throttledHandler())

    if (element) {
      resizeObserver.observe((element as unknown) as HTMLElement)
    }

    window.addEventListener('resize', throttledHandler)

    return () => {
      window.removeEventListener('resize', throttledHandler)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [handler, element])
}
