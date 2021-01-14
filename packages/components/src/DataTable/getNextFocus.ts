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

export const getTabStops = (ref: HTMLElement): HTMLElement[] =>
  Array.from(ref.querySelectorAll('td[tabindex="-1"],a,button'))

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextFocus = (
  direction: 1 | -1,
  element: HTMLElement,
  vertical?: boolean
) => {
  const tabStops = getTabStops(element)

  if (tabStops.length > 0) {
    const element = document.activeElement
    if (vertical) {
      const cellIndex = element && element.cellIndex
      if (direction === -1) {
        // Up Arrow
        const rowAbove =
          element &&
          element.parentElement &&
          element.parentElement.previousElementSibling
        if (rowAbove != null) {
          return rowAbove.cells[cellIndex]
        }
      } else if (direction === 1) {
        // Down Arrow
        const rowBelow =
          element &&
          element.parentElement &&
          element.parentElement.nextElementSibling
        if (rowBelow != null) {
          return rowBelow.cells[cellIndex]
        }
      }
    }

    if (
      document.activeElement &&
      tabStops.includes(document.activeElement as HTMLElement)
    ) {
      const next =
        tabStops.findIndex((el) => el === document.activeElement) + direction

      return tabStops[next]
    }
  }
  return null
}
