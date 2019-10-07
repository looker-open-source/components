import { Placement } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'
import { Popper } from 'react-popper'
import { ModalContext } from '../Modal'
import { ModalPortal } from '../Modal/ModalPortal'
import { OverlaySurface } from '../Overlay/OverlaySurface'

export interface PopoverProps {
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
  content: JSX.Element

  /**
   * Component to wrap. The HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the modal renderProp.
   */
  children: (
    onClick: (event: React.SyntheticEvent) => void,
    /**
     * Used by popper.js to position the OverlaySurface relative to the trigger
     */
    ref: React.RefObject<any>,
    className?: string
  ) => JSX.Element

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  portalRef?: React.RefObject<HTMLDivElement>

  /**
   * By default Popover cancels event bubbling when a click event triggers the closure of the Popover.
   * This was deemed a best practice as it prevents inadveted destructive actions and mirrors behavior
   * seen in many commonly used applications (e.g. Chrome).
   *
   * However, where several related Popover components are grouped together, cancelling event bubbling for
   * the "dismissal click" can make for an awkward UX. In these cases the developer can specify a ref for a
   * component that contains the related Popovers and the event-bubble cancellation will not take place.
   */
  groupedPopoversRef?: React.RefObject<HTMLElement>

  /**
   * By default Popover will reposition itself if they overflow the widow.
   * You can use the pin property to override this behavior.
   */
  pin?: boolean
}

/** @component */
export const Popover: React.FC<PopoverProps> = ({
  arrow = true,
  canClose,
  content,
  children,
  groupedPopoversRef,
  pin = false,
  isOpen: initializeOpen = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState(initializeOpen)
  const portalRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<any>(null)

  const handleOpen = (event: React.SyntheticEvent) => {
    setOpen(true)
    event.stopPropagation()
    event.preventDefault()
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    props.onClose && props.onClose()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (canClose && !canClose()) return

    // User clicked inside the Popover surface/portal
    if (portalRef.current && portalRef.current.contains(event.target as Node)) {
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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true)
    } else {
      document.removeEventListener('click', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isOpen])

  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  const surface = (
    <ModalContext.Provider value={{ closeModal: handleClose }}>
      <ModalPortal portalRef={portalRef}>
        <Popper
          positionFixed
          placement={props.placement}
          modifiers={{
            flip: {
              behavior: 'flip',
              enabled: !pin,
              flipVariations: true,
              flipVariationsByContent: true,
            },
            preventOverflow: {
              boundariesElement: 'viewport',
              escapeWithReference: true,
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
              ref={ref}
              style={style}
              backgroundColor="palette.white"
              border="1px solid"
              borderColor="palette.charcoal200"
              borderRadius="medium"
              boxShadow={3}
              color="palette.charcoal900"
            >
              {content}
            </OverlaySurface>
          )}
        </Popper>
      </ModalPortal>
    </ModalContext.Provider>
  )

  return (
    <>
      {isOpen && surface}
      {children(handleOpen, triggerRef, isOpen ? 'active' : undefined)}
    </>
  )
}
