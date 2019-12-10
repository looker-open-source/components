/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { Placement } from 'popper.js'
import React, {
  useEffect,
  useState,
  ReactNode,
  RefObject,
  Ref,
  SyntheticEvent,
  useRef,
} from 'react'
import { Popper } from 'react-popper'
import { Box } from '../Layout'
import { ModalPortal, ModalContext } from '../Modal'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import {
  useCallbackRef,
  useControlWarn,
  useFocusTrap,
  useScrollLock,
} from '../utils'

export interface UsePopoverProps {
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean

  /**
   * When true, display Surface and it's contained content
   * @default false
   */
  isOpen?: boolean
  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose?: () => void
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement

  /**
   * Content to rendered within the Popover surface.
   * @required
   */
  content: ReactNode

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

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
   * Allow the overlay to break out of the scroll parent
   */
  escapeWithReference?: boolean

  /**
   * The element which hovering on/off of will show/hide the triggering element
   */
  hoverDisclosureRef?: RefObject<HTMLElement>

  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void

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
}

export interface PopoverProps extends UsePopoverProps {
  /**
   * Component to wrap. The HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the modal renderProp.
   */
  children: (
    onClick: (event: SyntheticEvent) => void,
    /**
     * Used by popper.js to position the OverlaySurface relative to the trigger
     */
    ref: Ref<any>,
    className?: string
  ) => JSX.Element
}

function useVerticalSpace(
  element: HTMLElement | null,
  pin: boolean,
  placement: Placement,
  isOpen: boolean
) {
  const [verticalSpace, setVerticalSpace] = useState(0)

  useEffect(() => {
    function getVerticalSpace() {
      if (element) {
        // If popover is pinned, get the available vertical space
        if (pin) {
          const { top, bottom } = element.getBoundingClientRect()
          if (placement.indexOf('top') > -1) {
            setVerticalSpace(top)
          } else if (placement.indexOf('bottom') > -1) {
            setVerticalSpace(window.innerHeight - bottom)
          }
        }
      }
    }

    if (isOpen) {
      window.addEventListener('resize', getVerticalSpace)
      getVerticalSpace()
    }

    return () => {
      window.removeEventListener('resize', getVerticalSpace)
    }
  }, [element, pin, placement, isOpen])

  return verticalSpace
}

function useOpenWithoutElement(isOpen: boolean, element: HTMLElement | null) {
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

function usePopoverToggle(
  {
    isOpen: controlledIsOpen = false,
    setOpen: controlledSetOpen,
    canClose,
    groupedPopoversRef,
    triggerToggle,
  }: Pick<
    UsePopoverProps,
    'isOpen' | 'setOpen' | 'canClose' | 'groupedPopoversRef' | 'triggerToggle'
  >,
  portalElement: HTMLElement | null,
  triggerElement: HTMLElement | null
): [boolean, (value: boolean) => void] {
  const [uncontrolledIsOpen, uncontrolledSetOpen] = useState(controlledIsOpen)
  const mouseDownTarget = useRef<EventTarget | null>()
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePopover',
  })
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen
  const setOpen =
    isControlled && controlledSetOpen ? controlledSetOpen : uncontrolledSetOpen

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      mouseDownTarget.current = event.target
    }

    function handleClickOutside(event: MouseEvent) {
      if (canClose && !canClose()) return
      // User clicked inside the Popover surface/portal
      if (portalElement && portalElement.contains(event.target as Node)) {
        return
      }

      if (
        portalElement &&
        mouseDownTarget.current &&
        portalElement.compareDocumentPosition(
          mouseDownTarget.current as Node
        ) === Node.DOCUMENT_POSITION_FOLLOWING
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

      // Group-member clicked, allow event to propagate
      if (
        groupedPopoversRef &&
        groupedPopoversRef.current &&
        groupedPopoversRef.current.contains(event.target as Node)
      ) {
        return
      }

      event.stopPropagation()
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown, true)
      document.addEventListener('click', handleClickOutside, true)
    } else {
      document.removeEventListener('mousedown', handleMouseDown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [
    canClose,
    groupedPopoversRef,
    isOpen,
    setOpen,
    triggerElement,
    portalElement,
    triggerToggle,
  ])

  return [isOpen, setOpen]
}

export function usePopover({
  arrow = true,
  canClose,
  content,
  groupedPopoversRef,
  pin = false,
  isOpen: controlledIsOpen = false,
  onClose,
  placement: propsPlacement = 'bottom',
  hoverDisclosureRef,
  setOpen: controlledSetOpen,
  triggerElement,
  triggerToggle = true,
  escapeWithReference,
  focusTrap = true,
}: UsePopoverProps) {
  const {
    element: scrollElement,
    callbackRef: scrollRef,
    enable: enableScrollLock,
    isEnabled: scrollLockEnabled,
    disable: disableScrollLock,
  } = useScrollLock(controlledIsOpen, true)

  const {
    callbackRef: focusRef,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    disable: disableFocusTrap,
  } = useFocusTrap(controlledIsOpen && focusTrap)

  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const [isOpen, setOpen] = usePopoverToggle(
    {
      canClose,
      groupedPopoversRef,
      isOpen: controlledIsOpen,
      setOpen: controlledSetOpen,
      triggerToggle,
    },
    scrollElement,
    element
  )
  const verticalSpace = useVerticalSpace(element, pin, propsPlacement, isOpen)
  const openWithoutElem = useOpenWithoutElement(isOpen, element)

  function handleOpen(event: SyntheticEvent) {
    setOpen(true)
    enableScrollLock()
    enableFocusTrap()
    event.stopPropagation()
    event.preventDefault()
  }

  function handleClose() {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  // Logic to track the hover state of the hoverDisclosureRef and toggle the disclosure
  const [isHovered, setIsHovered] = useState(hoverDisclosureRef === undefined)

  function handleMouseEnter() {
    setIsHovered(true)
  }
  function handleMouseLeave() {
    setIsHovered(false)
  }

  useEffect(() => {
    const refCurrent = hoverDisclosureRef
      ? hoverDisclosureRef.current
      : undefined
    if (refCurrent) {
      refCurrent.addEventListener('mouseleave', handleMouseLeave)
      refCurrent.addEventListener('mouseenter', handleMouseEnter)
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('mouseleave', handleMouseLeave)
        refCurrent.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [hoverDisclosureRef])

  // If the height of the overlay will be 50px or less,
  // it's too small to do the scrolling behavior
  const pinAndScroll = verticalSpace > 50

  const popover = !openWithoutElem && isOpen && (
    <ModalContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        disableScrollLock,
        enableFocusTrap,
        enableScrollLock,
        focusTrapEnabled,
        scrollLockEnabled,
      }}
    >
      <ModalPortal ref={scrollRef}>
        <Popper
          positionFixed
          placement={propsPlacement}
          innerRef={focusRef}
          modifiers={{
            flip: {
              behavior: 'flip',
              enabled: !pin,
              flipVariations: true,
              flipVariationsByContent: true,
            },
            preventOverflow: {
              escapeWithReference: escapeWithReference || pinAndScroll,
              padding: 0,
            },
          }}
          referenceElement={element || undefined}
        >
          {({ ref, style, arrowProps, placement }) => (
            <OverlaySurface
              arrow={arrow}
              arrowProps={arrowProps}
              placement={placement}
              ref={ref}
              style={style}
              backgroundColor="palette.white"
              border="1px solid"
              borderColor="palette.charcoal200"
              borderRadius="medium"
              boxShadow={3}
              color="palette.charcoal900"
            >
              {verticalSpace > 50 ? (
                <Box
                  maxHeight={`calc(${verticalSpace - 10}px - 1rem)`}
                  overflowY="scroll"
                  borderRadius="inherit"
                >
                  {content}
                </Box>
              ) : (
                content
              )}
            </OverlaySurface>
          )}
        </Popper>
      </ModalPortal>
    </ModalContext.Provider>
  )
  return {
    isOpen,
    open: handleOpen,
    popover,
    ref: callbackRef,
    triggerShown: isOpen || isHovered,
  }
}

export function Popover({ children, ...props }: PopoverProps) {
  const { popover, open, ref, isOpen, triggerShown } = usePopover(props)
  const childrenOutput = children(open, ref, isOpen ? 'active' : '')

  return (
    <>
      {popover}
      {triggerShown && childrenOutput}
    </>
  )
}
