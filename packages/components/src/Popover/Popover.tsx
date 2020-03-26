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

import { Placement } from 'popper.js'
import React, {
  useEffect,
  useState,
  ReactNode,
  RefObject,
  Ref,
  SyntheticEvent,
} from 'react'
import { Popper } from 'react-popper'
import { Box } from '../Layout'
import { ModalPortal, ModalContext } from '../Modal'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import {
  useCallbackRef,
  useControlWarn,
  useFocusTrap,
  useHovered,
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
    ref: Ref<HTMLElement>,
    className?: string
  ) => JSX.Element

  /**
   * The element which hovering on/off of will show/hide the triggering element
   */
  hoverDisclosureRef?: HTMLElement | null | RefObject<HTMLElement>
}

function useVerticalSpace(
  element: HTMLElement | null,
  pin: boolean,
  placement: Placement,
  isOpen: boolean
) {
  const [spaceTop, setSpaceTop] = useState(0)
  const [spaceBottom, setSpaceBottom] = useState(0)
  const placementIsBottom = placement && placement.includes('bottom')
  const placementIsTop = placement && placement.includes('top')

  useEffect(() => {
    function getVerticalSpace() {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          const { top, bottom } = element.getBoundingClientRect()
          // If pin = true, we only care about the space on the placement side
          // Otherwise, we want both the top and bottom and pick the bigger
          if (!pin || placementIsTop) {
            setSpaceTop(top)
          } else if (pin) {
            setSpaceTop(0)
          }
          if (!pin || placementIsBottom) {
            setSpaceBottom(window.innerHeight - bottom)
          } else if (pin) {
            setSpaceBottom(0)
          }
        } else {
          // Horizontally placed Popovers can be as tall as the window
          setSpaceTop(window.innerHeight)
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
  }, [element, pin, placementIsBottom, placementIsTop, isOpen])

  // Set height to the larger, popper will take care of flipping as needed
  const max = Math.max(spaceTop, spaceBottom)

  const windowHeight = typeof window !== `undefined` ? window.innerHeight : 50

  // If the height of the overlay will be 50px or less,
  // it's too small to scroll
  // Popper will awkwardly move the overlay to try to fit in the window
  // but that's better than squishing it so small.
  return max > 50 ? max : windowHeight
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

function isNodeInOrAfter(nodeA: Node, nodeB: Node) {
  const relationship = nodeA.compareDocumentPosition(nodeB)
  return (
    relationship === Node.DOCUMENT_POSITION_FOLLOWING ||
    relationship ===
      Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY
  )
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
    function checkCloseAndStopEvent(event: MouseEvent) {
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

      // Group-member clicked, allow event to propagate
      if (
        groupedPopoversRef &&
        groupedPopoversRef.current &&
        groupedPopoversRef.current.contains(event.target as Node)
      ) {
        return
      }

      event.stopPropagation()
      event.preventDefault()
    }

    function handleMouseDown(event: MouseEvent) {
      setMouseDownTarget(event.target)
      checkCloseAndStopEvent(event)
    }

    function handleClickOutside(event: MouseEvent) {
      checkCloseAndStopEvent(event)
      setMouseDownTarget(null)
    }

    function handleMouseUp() {
      setMouseDownTarget(null)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown, true)
      document.addEventListener('click', handleClickOutside, true)
    } else if (mouseDownTarget) {
      // popover was closed via mousedown, but still need to cancel next click
      document.addEventListener('click', handleClickOutside, true)
      // and then cleanup mouseDownTarget
      document.addEventListener('mouseup', handleMouseUp, true)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true)
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('mouseup', handleMouseUp, true)
    }
  }, [
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

export function usePopover({
  arrow = true,
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
    trapRef: focusTrapRef,
  } = useFocusTrap(controlledIsOpen && focusTrap)

  const { focusTrapRef: parentFocusTrapRef } = React.useContext(ModalContext)

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

  useEffect(() => {
    if (isOpen) {
      if (focusTrap) {
        // this will disable any parent focus trap
        enableFocusTrap()
      } else {
        // need to manually disable any parent focus trap
        parentFocusTrapRef &&
          parentFocusTrapRef.current &&
          parentFocusTrapRef.current.deactivate({ returnFocus: false })
      }
    }
  }, [focusTrap, parentFocusTrapRef, isOpen, enableFocusTrap])

  function handleOpen(event: SyntheticEvent) {
    setOpen(true)
    enableScrollLock()
    event.stopPropagation()
    event.preventDefault()
  }

  function handleClose() {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const [containerElement, contentContainerRef] = useCallbackRef<HTMLElement>()

  const popover = !openWithoutElem && isOpen && (
    <ModalContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        disableScrollLock,
        enableFocusTrap,
        enableScrollLock,
        focusTrapEnabled,
        focusTrapRef,
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
              boundariesElement: 'window',
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
              <Box
                maxHeight={`calc(${verticalSpace - 10}px - 1rem)`}
                overflowY="auto"
                borderRadius="inherit"
                ref={contentContainerRef}
              >
                {content}
              </Box>
            </OverlaySurface>
          )}
        </Popper>
      </ModalPortal>
    </ModalContext.Provider>
  )
  return {
    contentContainerRef: containerElement,
    isOpen,
    open: handleOpen,
    popover,
    ref: callbackRef,
  }
}

export function Popover({
  children,
  hoverDisclosureRef,
  ...props
}: PopoverProps) {
  const { popover, open, ref, isOpen } = usePopover(props)
  const childrenOutput = children(open, ref, isOpen ? 'active' : '')

  const [isHovered] = useHovered(hoverDisclosureRef)
  const triggerShown = isHovered || isOpen

  return (
    <>
      {popover}
      {triggerShown && childrenOutput}
    </>
  )
}
