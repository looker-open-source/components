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

import { useState, useEffect } from 'react'
import { useControlWarn } from '../utils/useControlWarn'
import { UsePopoverProps } from './usePopover'

const isNodeInOrAfter = (nodeA: Node, nodeB: Node) => {
  const relationship = nodeA.compareDocumentPosition(nodeB)
  return (
    relationship === Node.DOCUMENT_POSITION_FOLLOWING ||
    relationship ===
      Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY
  )
}

export const usePopoverToggle = (
  {
    isOpen: controlledIsOpen = false,
    setOpen: controlledSetOpen,
    canClose,
    groupedPopoversRef,
    triggerToggle,
    cancelClickOutside = true,
  }: Pick<
    UsePopoverProps,
    | 'isOpen'
    | 'setOpen'
    | 'canClose'
    | 'groupedPopoversRef'
    | 'triggerToggle'
    | 'cancelClickOutside'
  >,
  portalElement: HTMLElement | null,
  triggerElement: HTMLElement | null
): [boolean, (value: boolean) => void] => {
  const [uncontrolledIsOpen, uncontrolledSetOpen] = useState(controlledIsOpen)
  const [mouseDownTarget, setMouseDownTarget] = useState<EventTarget | null>(
    null
  )
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePopover',
  })
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen
  const setOpen =
    isControlled && controlledSetOpen ? controlledSetOpen : uncontrolledSetOpen

  useEffect(() => {
    const checkCloseAndStopEvent = (event: MouseEvent) => {
      if (canClose && !canClose()) return

      // Check if the click started in (or on top of) the popover
      // If so, don't close the popover even if the user has dragged
      // outside the popover as this is preferable to a bug where another
      // component triggers a scroll animation resulting in an
      // unintentional drag, which closes the popover
      if (portalElement && mouseDownTarget) {
        if (isNodeInOrAfter(portalElement, mouseDownTarget as Node)) {
          return
        }
      }

      // User clicked inside the Popover surface/portal
      if (
        portalElement &&
        isNodeInOrAfter(portalElement, event.target as Node)
      ) {
        return
      }

      const clickedOnToggle =
        triggerElement && triggerElement.contains(event.target as Node)

      if (!triggerToggle && clickedOnToggle) {
        return
      }

      setOpen(false)

      // User clicked the trigger while the Popover was open
      if (clickedOnToggle) {
        // stopPropagation because instant Popover re-opening is silly
        event.stopPropagation()
        return
      }

      if (
        !cancelClickOutside ||
        // Group-member clicked, allow event to propagate
        (groupedPopoversRef &&
          groupedPopoversRef.current &&
          groupedPopoversRef.current.contains(event.target as Node))
      ) {
        return
      }

      event.stopPropagation()
      event.preventDefault()
    }

    const handleMouseDown = (event: MouseEvent) => {
      setMouseDownTarget(event.target)
      checkCloseAndStopEvent(event)
    }

    const handleClickOutside = (event: MouseEvent) => {
      checkCloseAndStopEvent(event)
      setMouseDownTarget(null)
    }

    const handleMouseUp = () => {
      setMouseDownTarget(null)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown, true)
      document.addEventListener('click', handleClickOutside, true)
    } else if (mouseDownTarget) {
      // popover was closed via mousedown, but still need to cancel next click
      document.addEventListener('click', handleClickOutside, true)
      // and then cleanup mouseDownTarget
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true)
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [
    cancelClickOutside,
    canClose,
    groupedPopoversRef,
    isOpen,
    setOpen,
    triggerElement,
    portalElement,
    triggerToggle,
    mouseDownTarget,
  ])

  return [isOpen, setOpen]
}
