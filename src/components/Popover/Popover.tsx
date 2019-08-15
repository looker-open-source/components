import FocusTrap from 'focus-trap-react'
import { Placement } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'
import { Popper } from 'react-popper'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalContext, ModalSurfaceStyleProps } from '../Modal'
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
   * Render Prop to render the controlled hover popper.
   * @required
   */
  content: React.ReactNode

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
    ref: React.RefObject<HTMLElement>,
    className?: string
  ) => React.ReactNode

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  portalRef?: React.RefObject<HTMLElement>

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
}

export const Popover: React.FC<PopoverProps> = ({
  canClose,
  content,
  children,
  groupedPopoversRef,
  isOpen: initializeOpen = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState(initializeOpen)
  const portalRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)

  const handleOpen = (event: React.SyntheticEvent) => {
    setOpen(true)
    event.stopPropagation()
    event.preventDefault()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      portalRef.current &&
      portalRef.current.contains(event.relatedTarget as Node)
    ) {
      return
    }

    setOpen(false)

    if (
      groupedPopoversRef &&
      groupedPopoversRef.current &&
      groupedPopoversRef.current.contains(event.relatedTarget as Node) &&
      (triggerRef.current &&
        !triggerRef.current.contains(event.relatedTarget as Node))
    ) {
      return
    }

    event.stopPropagation()
    event.stopImmediatePropagation()
    event.preventDefault()
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
    <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
      <ModalPortal portalRef={portalRef}>
        <Popper
          positionFixed
          placement={props.placement}
          modifiers={{
            flip: {
              behavior: 'flip',
              enabled: true,
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
              arrowProps={arrowProps}
              placement={placement}
              surfaceRef={ref}
              style={style}
              {...CustomizablePopoverAttributes.surface}
            >
              {content}
            </OverlaySurface>
          )}
        </Popper>
      </ModalPortal>
    </FocusTrap>
  )

  return (
    <>
      <ModalContext.Provider value={{ closeModal: props.onClose }}>
        {isOpen && surface}
      </ModalContext.Provider>
      {children(handleOpen, triggerRef, isOpen ? 'active' : undefined)}
    </>
  )
}

export interface CustomizablePopoverAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizablePopoverAttributes: CustomizablePopoverAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
