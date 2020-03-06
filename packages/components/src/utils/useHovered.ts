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

import { RefObject, useEffect, useState } from 'react'
import { useCallbackRef } from './useCallbackRef'

function getCurrentNode(
  elementOrRefObject: HTMLElement | null | RefObject<HTMLElement>
): HTMLElement | null {
  if (elementOrRefObject === null) return null
  return (elementOrRefObject as HTMLElement).addEventListener
    ? (elementOrRefObject as HTMLElement)
    : (elementOrRefObject as RefObject<HTMLElement>).current
}

// Get the current hover state of an element
// Recommended to be used with useCallbackRef
export function useHovered(
  hoverElement?: HTMLElement | null | RefObject<HTMLElement>
): [boolean, (node: HTMLElement | null) => void] {
  const [newElement, callbackRef] = useCallbackRef()
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
        const node = getCurrentNode(element) as Node

        const relationship = node.compareDocumentPosition(
          document.activeElement as Node
        )

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
