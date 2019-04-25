import FocusTrap from 'focus-trap-react'
import { Placement } from 'popper.js'
import * as React from 'react'
import { Popper, PopperArrowProps } from 'react-popper'
import { ModalBackdrop, ModalContext } from '../Modal'
import { ModalPortal } from '../Modal/ModalPortal'

export interface OverlayChildrenProps {
  ref: React.Ref<HTMLElement>
  style: React.CSSProperties
  /**
   * Properties to be applied to the arrow container. These originate from the
   * underlying react-popper library and are used to position and style the
   * arrow.
   */
  arrowProps: PopperArrowProps
  /**
   * The placement (eg top, bottom, left-end, etc) of the arrow. Useful for
   * applying conditional styles to the arrow container.
   */
  placement: Placement

  eventHandlers?: React.DOMAttributes<{}>
}

export interface OverlayInteractiveProps {
  children: React.ReactNode
  /**
   * When true, renders the Backdrop, Surface and it's contained content
   * @default false
   */
  isOpen?: boolean
  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose?: () => void
  /**
   * Used by popper.js to position the OverlaySurface relative to the trigger
   */
  triggerRef?: React.RefObject<HTMLElement>
  /**
   * Pins popper placement and prevents popper from moving on window resize.
   * @default false
   */
  pin?: boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
  /**
   * Display a visible backdrop
   * Optionally, backdrop prop can be supplied as CSSProperties object to merge with the Backdrop
   * implementation. These must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   * @default false
   */
  backdrop?: boolean | React.CSSProperties
}

export interface OverlayProps extends OverlayInteractiveProps {
  /**
   * Expects a callback that returns the actual overlay content to render. The
   * callback receives the following props:
   *
   * **arrowProps**: properties used to correctly position the arrow on a
   * content surface **placement**: the location of the arrow.
   *
   * See OverlaySurface.tsx for an example of how to use these properties.
   */
  children: (props: OverlayChildrenProps) => React.ReactNode

  portalRef?: React.RefObject<HTMLElement>
}

/**
 * Overlay is a low-level component that can be used to build Popovers,
 * Tooltips, Modals, etc. It handles coordinating a trigger component, like a
 * Button or Link, with the rendering of an "overlay" or "content surface" that
 * appears above other content in the page.
 *
 * Under the hood, Overlay is powered by [Popper.js](https://popper.js.org/) and
 * its corresponding [React library,
 * react-popper](https://github.com/FezVrasta/react-popper).
 */

export const Overlay: React.FC<OverlayProps> = ({
  backdrop = false,
  ...props
}) => {
  const triggerRef =
    props.triggerRef && props.triggerRef.current
      ? props.triggerRef.current
      : undefined

  const surface = (
    <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
      <ModalPortal portalRef={props.portalRef}>
        <ModalBackdrop
          onClick={props.onClose}
          visible={!!backdrop}
          style={!!backdrop && backdrop !== true ? backdrop : undefined}
        />
        <Popper
          positionFixed
          placement={props.placement}
          modifiers={{
            flip: { enabled: props.pin ? false : true },
            preventOverflow: {
              escapeWithReference: true,
              padding: 0,
            },
          }}
          referenceElement={triggerRef}
        >
          {({ ref, style, arrowProps, placement }) =>
            props.children({
              arrowProps,
              placement,
              ref,
              style,
            })
          }
        </Popper>
      </ModalPortal>
    </FocusTrap>
  )

  return (
    <ModalContext.Provider value={{ closeModal: props.onClose }}>
      {props.isOpen && surface}
    </ModalContext.Provider>
  )
}
