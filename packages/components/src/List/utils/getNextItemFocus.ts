/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import { getFallbackElement, getTabStops } from '../../utils/getNextFocus'

export const itemSelector =
  '[role="treeitem"]:not(:disabled),[role="listitem"]:not(:disabled),[role="menuitem"]:not(:disabled)'

export const getItems = (ref: HTMLElement): HTMLElement[] =>
  Array.from(ref.querySelectorAll(itemSelector))

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextItemFocus = (
  direction: 1 | -1,
  element: HTMLElement,
  vertical?: boolean
) => {
  const items = getItems(element)
  const focusedElement = document.activeElement

  if (items.length > 0 && focusedElement instanceof HTMLElement) {
    const isItemFocused = focusedElement && items.includes(focusedElement)
    const closestWrapper = focusedElement?.closest(
      'li:not(:disabled),[role=group]:not(:disabled)'
    )

    if (closestWrapper instanceof HTMLElement) {
      if (vertical) {
        const target = isItemFocused
          ? focusedElement
          : closestWrapper.querySelector(itemSelector)

        const next = items.findIndex(el => el === target) + direction

        if (next === items.length || !items[next]) {
          return getFallbackElement(direction, element, items)
        }

        return items[next]
      } else if (vertical === false) {
        const tabStops = getTabStops(
          closestWrapper,
          'a,input,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)'
        )

        const next = tabStops.findIndex(el => el === focusedElement) + direction

        if (next === tabStops.length || !tabStops[next]) {
          return getFallbackElement(direction, focusedElement, tabStops)
        }

        return tabStops[next]
      }
    }
  }

  // Tabbing to a Tree should trigger this fallback condition
  return getFallbackElement(direction, element, items)
}
