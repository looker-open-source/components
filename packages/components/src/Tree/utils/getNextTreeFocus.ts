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

import { getFallbackElement } from '../../utils/getNextFocus'

export const getTreeItems = (ref: HTMLElement): HTMLElement[] =>
  Array.from(ref.querySelectorAll('[role="treeitem"]:not(:disabled)'))

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextTreeFocus = (
  direction: 1 | -1,
  element: HTMLElement,
  vertical?: boolean
) => {
  const treeItems = getTreeItems(element)

  if (treeItems.length > 0) {
    const focusedElement = document.activeElement
    const isItemFocused =
      focusedElement && treeItems.includes(focusedElement as HTMLElement)
    const closestWrapper = focusedElement?.closest(
      'li:not(:disabled)'
    ) as HTMLElement

    if (vertical) {
      const target = isItemFocused
        ? (focusedElement as HTMLElement)
        : (closestWrapper.querySelector(
            '[role="treeitem"]:not(:disabled)'
          ) as HTMLElement)

      const next = treeItems.findIndex((el) => el === target) + direction

      if (next === treeItems.length || !treeItems[next]) {
        return getFallbackElement(direction, element, treeItems)
      }

      return treeItems[next]
    } else if (vertical === false) {
      const accordionFocused =
        (focusedElement?.hasAttribute('aria-expanded') &&
          focusedElement.getAttribute('role') === 'treeitem') ||
        closestWrapper.hasAttribute('aria-expanded')
      const childTabStops = Array.from(
        closestWrapper.querySelectorAll('[tabindex="-1"]:not(:disabled)')
      )

      const tabStops = accordionFocused
        ? ([focusedElement, ...childTabStops] as HTMLElement[])
        : (childTabStops as HTMLElement[])

      const next = tabStops.findIndex((el) => el === focusedElement) + direction

      if (next === tabStops.length || !tabStops[next]) {
        return getFallbackElement(
          direction,
          focusedElement as HTMLElement,
          tabStops as HTMLElement[]
        )
      }

      return tabStops[next]
    }
  }

  // Tabbing to a Tree should trigger this fallback condition
  return getFallbackElement(direction, element, treeItems)
}
