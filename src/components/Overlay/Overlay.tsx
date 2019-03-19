import { Placement } from 'popper.js'
import * as React from 'react'
import { Popper, PopperArrowProps } from 'react-popper'
import { ModalBackdrop, ModalContext } from '../Modal'
import { ModalPortal } from '../Modal/ModalPortal'

export interface OverlayContentProps {
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
   * When true, renders the Backdrop, Surface and it's contained content immediately.
   * @default false
   */
  isOpen: boolean
  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose: () => void

  triggerRef: HTMLElement | null

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
  children: (props: OverlayContentProps) => React.ReactNode
  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdropStyles?: React.CSSProperties
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

export class Overlay extends React.Component<OverlayProps> {
  private portalRef: React.RefObject<HTMLElement>

  constructor(props: OverlayProps) {
    super(props)
    this.portalRef = React.createRef()
  }

  public componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress)
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress)
  }

  public render() {
    const surface = (
      <ModalPortal ref={this.portalRef}>
        <ModalBackdrop
          onClick={this.props.onClose}
          style={this.props.backdropStyles}
        />
        <Popper
          positionFixed
          placement={this.props.placement}
          modifiers={{ flip: { enabled: this.props.pin ? false : true } }}
          referenceElement={
            this.props.triggerRef ? this.props.triggerRef : undefined
          }
        >
          {({ ref, style, arrowProps, placement }) =>
            this.props.children({
              arrowProps,
              placement,
              ref,
              style,
            })
          }
        </Popper>
      </ModalPortal>
    )

    return (
      <ModalContext.Provider value={{ closeModal: this.props.onClose }}>
        {this.props.isOpen && surface}
      </ModalContext.Provider>
    )
  }

  private handleEscapePress = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return
    if (!event.target) return
    if (
      !this.portalRef.current ||
      !this.portalRef.current.contains(event.target as Node)
    ) {
      return
    }

    this.props.onClose()
  }
}
