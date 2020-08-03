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

import { MutableRefObject } from 'react'

const getTabStops = (ref: HTMLElement): HTMLElement[] =>
  Array.from(ref.querySelectorAll('a,button:not(:disabled),[tabindex="0"]'))

export const moveFocus = (
  direction: number,
  initial: number,
  containerRef?: MutableRefObject<HTMLElement | null>
) => {
  if (!containerRef || !containerRef.current) return
  const tabStops = getTabStops(containerRef.current)

  if (
    document.activeElement &&
    tabStops.includes(document.activeElement as HTMLElement)
  ) {
    const next =
      tabStops.findIndex((f) => f === document.activeElement) + direction

    if (next === tabStops.length) return
    if (!tabStops[next]) return
    tabStops[next].focus()
  } else {
    tabStops.slice(initial)[0].focus()
  }
  return false
}
