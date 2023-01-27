/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Checks a list of mutations against an element
 * and returns true if it was removed
 * @param mutationsList the list of mutations from a MutationObserver
 * @param element
 */
export const checkElementRemoved = (
  mutationsList: MutationRecord[],
  element?: HTMLElement
) => {
  if (!element) return false
  return mutationsList.some(({ type, removedNodes }) => {
    if (type === 'childList' && removedNodes.length > 0) {
      return Array.from(removedNodes).some(node => {
        return node.contains(element)
      })
    }
    return false
  })
}
