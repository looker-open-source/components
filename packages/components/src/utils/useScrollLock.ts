/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { useEffect, useRef } from 'react'

export function useScrollLock(
  disabled = false,
  useCapture = false,
  allowScrollWithin?: HTMLElement
) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollWithin = allowScrollWithin || ref.current

  useEffect(() => {
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
        !(scrollWithin && scrollWithin.contains(scrollTarget))
      ) {
        scrollTarget.scrollTop = scrollTop
      } else if (scrollTarget === document) {
        console.log(e)
        window.scrollTo({ top: scrollTop })
      }
    }

    if (disabled) {
      window.removeEventListener('scroll', stopScroll, useCapture)
    } else {
      window.addEventListener('scroll', stopScroll, useCapture)
    }

    return () => {
      window.removeEventListener('scroll', stopScroll, useCapture)
    }
  }, [disabled, scrollWithin, useCapture])

  return ref
}
