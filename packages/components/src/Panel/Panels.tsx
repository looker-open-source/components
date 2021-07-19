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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { FocusEvent, forwardRef, Ref, useRef } from 'react'
import styled from 'styled-components'
import { tabbable } from 'tabbable'
import { getNextFocusTarget, useForkedRef, useWrapEvent } from '../utils'

const getTopElement = (elements: HTMLElement[]) => {
  if (elements.length === 0) return
  const sortedElements = elements.sort((elementA, elementB) => {
    const relationship = elementA.compareDocumentPosition(elementB)
    return relationship > 3 ? 1 : -1
  })
  return sortedElements[0]
}

const getPanels = (element: HTMLElement): HTMLElement[] =>
  Array.from(element.querySelectorAll('[data-panel]'))

const isElementAfter = (elementA: Node, elementB: Node) =>
  elementB.compareDocumentPosition(elementA) & Node.DOCUMENT_POSITION_FOLLOWING

const isElementBefore = (elementA: Node, elementB: Node) =>
  elementB.compareDocumentPosition(elementA) & Node.DOCUMENT_POSITION_PRECEDING

const focusOneAfter = (element: HTMLElement) => {
  const tabStops = tabbable(document.body)
  const firstTabStopAfter = tabStops.find((node) =>
    isElementAfter(node, element)
  )
  firstTabStopAfter?.focus()
}

const focusOneBefore = (element: HTMLElement) => {
  const tabStops = tabbable(document.body)
  let lastTabStopBefore = tabStops[0]
  tabStops.some((node) => {
    lastTabStopBefore = node
    return !isElementBefore(node, element)
  })
  lastTabStopBefore.focus()
}

const PanelsInternal = forwardRef(
  (
    { onBlur, onFocus, ...props }: CompatibleHTMLProps<HTMLDivElement>,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const internalRef = useRef<HTMLDivElement | null>(null)
    const ref = useForkedRef(internalRef, forwardedRef)

    // Ref to track whether focus is inside the top panel
    const focusInTopPanel = useRef(false)

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
      const nextFocusTarget = getNextFocusTarget(e)

      if (!internalRef.current?.contains(nextFocusTarget as Node)) {
        // Focus left the Panels area entirely, set tracker ref to false
        focusInTopPanel.current = false
      }
    }

    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
      const topPanel = getTopElement(getPanels(e.currentTarget))
      // Is there a panel open?
      if (topPanel && internalRef.current) {
        if (topPanel.contains(e.target)) {
          // Focus is inside the topPanel, no need to move it
          // just update the tracker ref
          focusInTopPanel.current = true
        } else if (focusInTopPanel.current) {
          // Focus was inside the topPanel and just left it and landed
          // somewhere else inside Panels, i.e. hidden underneath the topPanel.
          // So we move focus just after or before Panels
          if (isElementBefore(e.target, topPanel)) {
            focusOneBefore(internalRef.current)
          } else {
            focusOneAfter(internalRef.current)
          }
        } else {
          // Focus landed on an element hidden underneath topPanel
          // so we move it to topPanel
          topPanel.focus()
        }
      } else {
        // If there's no panel open, no need to do anything further
        // except set the tracking ref to false
        focusInTopPanel.current = false
      }
    }

    const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)
    const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)

    return (
      <div
        onBlur={wrappedOnBlur}
        onFocus={wrappedOnFocus}
        {...props}
        ref={ref}
      />
    )
  }
)

PanelsInternal.displayName = 'PanelsInternal'

export const Panels = styled(PanelsInternal)`
  height: 100%;
  position: relative;
  width: 100%;
`
