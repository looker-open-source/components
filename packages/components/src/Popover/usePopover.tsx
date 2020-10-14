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

import { Placement } from '@popperjs/core'
import React, {
  useContext,
  useEffect,
  useMemo,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useState,
  Ref,
} from 'react'
import { Box } from '../Layout'
import { Portal } from '../Portal'
import { DialogContext } from '../Dialog'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import {
  useCallbackRef,
  useFocusTrap,
  usePopper,
  UsePopperProps,
  useScrollLock,
  useForkedRef,
} from '../utils'
import { usePopoverToggle } from './usePopoverToggle'
import { useVerticalSpace } from './useVerticalSpace'

export interface UsePopoverProps {
  /**
   * Content to rendered within the Popover surface.
   * @required
   */
  content: ReactNode

  /**
   * When true, display Surface and it's contained content
   * @default false
   */
  isOpen?: boolean

  /**
   * Specify a callback to be called each time this Popover is closed
   */
  onClose?: () => void

  /**
   * Specify a callback to be called before trying to close the Popover. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Popover is closed
   */
  canClose?: () => boolean

  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void

  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement

  portalElement?: HTMLDivElement | null

  /**
   * By default Popover cancels event bubbling when a click event triggers the closure of the Popover.
   * This was deemed a best practice as it prevents inadvertent destructive actions and mirrors behavior
   * seen in many commonly used applications (e.g. Chrome).
   *
   * However, where several related Popover components are grouped together, cancelling event bubbling for
   * the "dismissal click" can make for an awkward UX. In these cases the developer can specify a ref for a
   * component that contains the related Popovers and the event-bubble cancellation will not take place.
   */
  groupedPopoversRef?: RefObject<HTMLElement>

  /**
   * By default Popover will reposition itself if they overflow the widow.
   * You can use the pin property to override this behavior.
   */
  pin?: boolean

  /**
   * Set whether to disable scrolling outside the popover
   */
  disableScrollLock?: boolean

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * Whether to close the popover when the toggle is clicked again
   * @default true
   */
  triggerToggle?: boolean

  /**
   * Whether to trap focus within the popover
   * @default true
   */
  focusTrap?: boolean

  /**
   * Whether to honor the first click outside the popover
   * @default true
   */
  cancelClickOutside?: boolean
}

const useOpenWithoutElement = (
  isOpen: boolean,
  element: HTMLElement | null
) => {
  const [openWithoutElem, setOpenWithoutElem] = useState(
    isOpen && element === null
  )
  useEffect(() => {
    if (element && openWithoutElem) {
      setOpenWithoutElem(false)
    }
  }, [openWithoutElem, element])
  return openWithoutElem
}

export interface UsePopoverResponseDom {
  onClick: (event: SyntheticEvent) => void
  /**
   * Used by popper.js to position the OverlaySurface relative to the trigger
   */
  ref: Ref<any>
  'aria-expanded': boolean
  'aria-haspopup': boolean
}

export const usePopover = ({
  canClose,
  content,
  groupedPopoversRef,
  pin = false,
  isOpen: controlledIsOpen = false,
  onClose,
  placement: propsPlacement = 'bottom',
  setOpen: controlledSetOpen,
  triggerElement,
  triggerToggle = true,
  focusTrap = true,
  cancelClickOutside,
}: UsePopoverProps) => {
  const [scrollElement, scrollRef] = useScrollLock()

  const {
    callbackRef: focusRef,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    disable: disableFocusTrap,
    trapRef: focusTrapRef,
  } = useFocusTrap(controlledIsOpen && focusTrap)

  const { focusTrapRef: parentFocusTrapRef } = useContext(DialogContext)

  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const [isOpen, setOpen] = usePopoverToggle(
    {
      canClose,
      cancelClickOutside,
      groupedPopoversRef,
      isOpen: controlledIsOpen,
      setOpen: controlledSetOpen,
      triggerToggle,
    },
    scrollElement,
    element
  )

  const openWithoutElem = useOpenWithoutElement(isOpen, element)

  useEffect(() => {
    if (isOpen) {
      if (focusTrap) {
        // this will disable any parent focus trap
        enableFocusTrap()
      } else {
        // need to manually disable any parent focus trap
        parentFocusTrapRef &&
          parentFocusTrapRef.current &&
          parentFocusTrapRef.current.pause()
      }
    } else if (!focusTrap) {
      // need to manually re-enable any parent focus trap
      parentFocusTrapRef &&
        parentFocusTrapRef.current &&
        parentFocusTrapRef.current.unpause()
    }
  }, [focusTrap, parentFocusTrapRef, isOpen, enableFocusTrap])

  const handleOpen = (event: SyntheticEvent) => {
    setOpen(true)
    event.stopPropagation()
    event.preventDefault()
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const usePopperProps = useMemo<UsePopperProps>(
    () => ({
      anchor: element,
      options: {
        modifiers: [
          {
            enabled: !pin,
            name: 'flip',
            options: {
              flipVariations: true,
              flipVariationsByContent: true,
            },
          },
          {
            // No scroll event listener needed (we have useScrollLock)
            enabled: true,
            name: 'eventListeners',
            options: {
              scroll: false,
            },
          },
        ],
        placement: propsPlacement,
      },
    }),
    [element, pin, propsPlacement]
  )
  const { placement, popperInstanceRef, style, targetRef } = usePopper(
    usePopperProps
  )

  const verticalSpace = useVerticalSpace(
    element,
    pin,
    propsPlacement,
    isOpen,
    style
  )

  const ref = useForkedRef(targetRef, focusRef)

  const [containerElement, contentContainerRef] = useCallbackRef<HTMLElement>()

  const popover = !openWithoutElem && isOpen && (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        enableFocusTrap,
        focusTrapEnabled,
        focusTrapRef,
      }}
    >
      <Portal ref={scrollRef}>
        <OverlaySurface
          placement={placement}
          ref={ref}
          style={style}
          backgroundColor="background"
          border="1px solid"
          borderColor="ui2"
          borderRadius="medium"
          boxShadow={3}
          color="text5"
        >
          <Box
            maxHeight={`calc(${verticalSpace - 10}px - 1rem)`}
            overflowY="auto"
            borderRadius="inherit"
            ref={contentContainerRef}
          >
            {content}
          </Box>
        </OverlaySurface>
      </Portal>
    </DialogContext.Provider>
  )
  return {
    contentContainer: containerElement,
    domProps: {
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      onClick: handleOpen,
      ref: callbackRef,
    },
    isOpen,
    open: handleOpen,
    popover,
    popperInstanceRef,
    ref: callbackRef,
  }
}
