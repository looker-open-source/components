/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const getTabStops = (
  ref: HTMLElement,
  selector = 'a,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)'
): HTMLElement[] => Array.from(ref.querySelectorAll(selector))

// Returns a fallback element (called when the element with focus has been removed from the DOM)
export const getFallbackElement = (
  direction: 1 | -1,
  containerElement: HTMLElement,
  tabStops: HTMLElement[]
) => {
  let fallback: HTMLElement

  if (direction === 1) {
    const firstVisibleChild = tabStops.find(childElement => {
      return childElement.offsetTop >= containerElement.scrollTop
      return false
    })

    if (firstVisibleChild) fallback = firstVisibleChild
    else fallback = tabStops[0]
  } else {
    fallback = tabStops[tabStops.length - 1]
  }

  return fallback
}

/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export const getNextFocus = (direction: 1 | -1, element: HTMLElement) => {
  const tabStops = getTabStops(element)

  const focusedElement = document.activeElement

  if (tabStops.length > 0 && focusedElement instanceof HTMLElement) {
    if (tabStops.includes(focusedElement)) {
      const next =
        tabStops.findIndex(el => el === document.activeElement) + direction

      if (next === tabStops.length || !tabStops[next]) {
        // Reached the end of tab stops for this direction
        return getFallbackElement(direction, element, tabStops)
      }

      return tabStops[next]
    }
    return getFallbackElement(direction, element, tabStops)
  }
  return null
}
