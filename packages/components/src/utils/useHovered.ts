/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { RefObject } from 'react'
import { useEffect, useState } from 'react'
import { getCurrentNode } from './getCurrentNode'
import { useCallbackRef } from './useCallbackRef'

/**
 * Get the hover / focus state of an element over which the current component has no control
 */
export function useHovered<E extends HTMLElement = HTMLElement>(
  hoverElement?: E | null | RefObject<E>
): [boolean, ((node: E | null) => void) | null] {
  const [newElement, callbackRef] = useCallbackRef<E>()
  const element =
    typeof hoverElement === 'undefined' ? newElement : hoverElement

  // If the hoverElement is either null nor a dom node, isHovered defaults to false

  // (This works well except for the edge case where
  // element is under the mouse at time of dom attachment.
  // If handling this edge case is crucial, use React callbacks onMouseEnter and onMouseLeave
  // instead of this hook)

  // If the hoverElement is undefined the hover "gate" is not being used so
  // isHovered defaults to true
  const [isHovered, setIsHovered] = useState(hoverElement === undefined)

  useEffect(() => {
    function handleMouseEnter() {
      setIsHovered(true)
    }
    function handleMouseLeave() {
      window.requestAnimationFrame(() => {
        const node = getCurrentNode(element)

        const relationship =
          document.activeElement && node
            ? node.compareDocumentPosition(document.activeElement)
            : Node.DOCUMENT_POSITION_DISCONNECTED

        // Don't set isHovered to false if a child of the element is currently focused
        const activeElementIsChildOfNode =
          relationship ===
          Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY

        if (!activeElementIsChildOfNode) setIsHovered(false)
      })
    }

    const node = getCurrentNode(element)
    if (node) {
      node.addEventListener('mouseleave', handleMouseLeave)
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('focusout', handleMouseLeave)
      node.addEventListener('focusin', handleMouseEnter)
    }
    return () => {
      if (node) {
        node.removeEventListener('mouseleave', handleMouseLeave)
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('focusout', handleMouseLeave)
        node.removeEventListener('focusin', handleMouseEnter)
      }
    }
  }, [element])

  return [isHovered, callbackRef]
}
