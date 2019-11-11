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
  useRef,
  useState,
  ReactNode,
  RefObject,
  SyntheticEvent,
} from 'react'
import { Popper } from 'react-popper'
import { Box } from '../Layout'
import { ModalContext } from '../Modal'
import { ModalPortal } from '../Modal/ModalPortal'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import { useControlWarn, useFocusTrap } from '../utils'

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

  portalRef?: RefObject<HTMLDivElement>

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
   * The element which hovering on/off of will show/hide the triggering element
   */
  hoverDisclosureRef?: RefObject<HTMLElement>
  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerRef?: RefObject<HTMLElement>
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
    ref: RefObject<any>,
    className?: string
  ) => JSX.Element
}

function useVerticalSpace(
  ref: RefObject<HTMLElement>,
  pin: boolean,
  placement: Placement,
  isOpen: boolean
) {
  const [verticalSpace, setVerticalSpace] = useState(0)

  useEffect(() => {
    function getVerticalSpace() {
      if (ref.current) {
        // If popover is pinned, get the available vertical space
        if (pin) {
          const { top, bottom } = ref.current.getBoundingClientRect()
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
  }, [ref, pin, placement, isOpen])

  return verticalSpace
}

function useOpenWithoutElement(isOpen: boolean, ref: RefObject<HTMLElement>) {
  const [openWithoutElem, setOpenWithoutElem] = useState(
    isOpen && ref.current === null
  )
  useEffect(() => {
    if (ref.current && openWithoutElem) {
      setOpenWithoutElem(false)
    }
  }, [openWithoutElem, ref])
  return openWithoutElem
}

function usePopoverToggle(
  {
    isOpen: controlledIsOpen = false,
    setOpen: controlledSetOpen,
    canClose,
    groupedPopoversRef,
  }: Pick<
    UsePopoverProps,
    'isOpen' | 'setOpen' | 'canClose' | 'groupedPopoversRef'
  >,
  portalRef: RefObject<HTMLDivElement>,
  triggerRef: RefObject<HTMLElement>
): [boolean, (value: boolean) => void] {
  const [uncontrolledIsOpen, uncontrolledSetOpen] = useState(controlledIsOpen)
  const isControlled = useControlWarn({
    controllingProps: ['controlledSetOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePopover',
  })
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen
  const setOpen =
    isControlled && controlledSetOpen ? controlledSetOpen : uncontrolledSetOpen

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (canClose && !canClose()) return

      // User clicked inside the Popover surface/portal
      if (
        portalRef.current &&
        portalRef.current.contains(event.target as Node)
      ) {
        return
      }

      if (
        portalRef.current &&
        event.target &&
        portalRef.current.compareDocumentPosition(event.target as Node) ===
          Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        return
      }

      setOpen(false)

      // User clicked the trigger while the Popover was open
      if (
        triggerRef.current &&
        triggerRef.current.contains(event.target as Node)
      ) {
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
      document.addEventListener('click', handleClickOutside, true)
    } else {
      document.removeEventListener('click', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [canClose, groupedPopoversRef, isOpen, setOpen, triggerRef, portalRef])

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
  ...props
}: UsePopoverProps) {
  const portalRef = useRef<HTMLDivElement | null>(null)
  const newTriggerRef = useRef<HTMLElement>(null)
  const focusRef = useFocusTrap()

  const triggerRef = props.triggerRef || newTriggerRef

  const [isOpen, setOpen] = usePopoverToggle(
    {
      canClose,
      groupedPopoversRef,
      isOpen: controlledIsOpen,
      setOpen: controlledSetOpen,
    },
    portalRef,
    triggerRef
  )
  const verticalSpace = useVerticalSpace(
    triggerRef,
    pin,
    propsPlacement,
    isOpen
  )
  const openWithoutElem = useOpenWithoutElement(isOpen, triggerRef)

  function handleOpen(event: SyntheticEvent) {
    setOpen(true)
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

  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  const popover = !openWithoutElem && isOpen && (
    <ModalContext.Provider value={{ closeModal: handleClose }}>
      <ModalPortal portalRef={portalRef}>
        <Popper
          positionFixed
          placement={propsPlacement}
          modifiers={{
            flip: {
              behavior: 'flip',
              enabled: !pin,
              flipVariations: true,
              flipVariationsByContent: true,
            },
            preventOverflow: {
              escapeWithReference: verticalSpace > 50,
              padding: 0,
            },
          }}
          referenceElement={referenceElement}
        >
          {({ ref, style, arrowProps, placement }) => (
            <OverlaySurface
              arrow={arrow}
              arrowProps={arrowProps}
              placement={placement}
              ref={node => {
                ref(node)
                focusRef(node)
              }}
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
    className: isOpen ? 'active' : undefined,
    open: handleOpen,
    popover,
    ref: triggerRef,
    triggerShown: isOpen || isHovered,
  }
}

export function Popover({ children, ...props }: PopoverProps) {
  const { popover, open, ref, className, triggerShown } = usePopover(props)
  const childrenOutput = children(open, ref, className)

  return (
    <>
      {popover}
      {triggerShown && childrenOutput}
    </>
  )
}
