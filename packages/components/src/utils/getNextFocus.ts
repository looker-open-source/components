/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

export const getTabStops = (ref: HTMLElement): HTMLElement[] =>
  Array.from(
    ref.querySelectorAll(
      'a,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)'
    )
  )

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextFocus = (direction: 1 | -1, element: HTMLElement) => {
  const tabStops = getTabStops(element)

  if (tabStops.length > 0) {
    const fallback =
      direction === 1 ? tabStops[0] : tabStops[tabStops.length - 1]
    if (
      document.activeElement &&
      tabStops.includes(document.activeElement as HTMLElement)
    ) {
      const next =
        tabStops.findIndex((el) => el === document.activeElement) + direction

      if (next === tabStops.length || !tabStops[next]) {
        // Reached the end of tab stops for this direction
        return fallback
      }

      return tabStops[next]
    }
    return fallback
  }
  return null
}
