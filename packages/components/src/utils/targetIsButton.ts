/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { MouseEvent as ReactMouseEvent } from 'react'

const checkForButton = (
  element: Element,
  containingAncestor: Element
): boolean => {
  if (element === containingAncestor) return false
  if (!element.parentElement) return false
  if (element.tagName === 'BUTTON') {
    return true
  }
  return checkForButton(element.parentElement, containingAncestor)
}
/**
 * Walks up the dom tree from an event's target to its currentTarget
 * to determine whether a mousedown/click was located within a button
 * @param e mouse event
 */
export const targetIsButton = (e: ReactMouseEvent<HTMLElement>) => {
  return checkForButton(e.target as Element, e.currentTarget as Element)
}
