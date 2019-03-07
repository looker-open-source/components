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
   * When true, renders the popover as open immediately.
   * @default false
   */
  open?: boolean

  children: JSX.Element
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
  render: (props: OverlayContentProps) => React.ReactNode
  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdropStyles?: React.CSSProperties
}

export interface OverlayState {
  isOpen: boolean
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

export class Overlay extends React.Component<OverlayProps, OverlayState> {
  private portalRef: React.RefObject<HTMLElement>
  private triggerRef: React.RefObject<HTMLElement>
  private mounted: boolean = false

  constructor(props: OverlayProps) {
    super(props)
    this.state = { isOpen: !!props.open }
    this.portalRef = React.createRef()
    this.triggerRef = React.createRef()
  }

  public componentDidMount() {
    this.mounted = true
  }

  public componentWillUnmount() {
    this.mounted = false

    window.removeEventListener('keydown', this.handleEscapePress)
    document.removeEventListener('click', this.handleOutsideClick)
  }

  public render() {
    const triggerEventHandlers: React.DOMAttributes<{}> = {
      onClick: this.toggle,
    }

    const surface = this.state.isOpen && (
      <ModalPortal ref={this.portalRef}>
        <ModalBackdrop onClick={this.close} style={this.props.backdropStyles} />
        <Popper
          positionFixed
          placement={this.props.placement}
          modifiers={{ flip: { enabled: this.props.pin ? false : true } }}
          referenceElement={
            this.triggerRef.current ? this.triggerRef.current : undefined
          }
        >
          {({ ref, style, arrowProps, placement }) =>
            this.props.render({
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
      <ModalContext.Provider value={{ closeModal: this.close }}>
        {this.generateTrigger(triggerEventHandlers)}
        {surface}
      </ModalContext.Provider>
    )
  }

  private generateTrigger(eventHandlers?: React.DOMAttributes<{}>) {
    return React.cloneElement(this.props.children, {
      innerRef: this.triggerRef, // SC4-Upgrade this will change to `ref: ...`
      ...eventHandlers,
    })
  }

  private close = () => {
    document.removeEventListener('keydown', this.handleEscapePress)
    document.removeEventListener('click', this.handleOutsideClick)
    this.mounted && this.setState({ isOpen: false })
  }

  private open = () => {
    document.addEventListener('keydown', this.handleEscapePress)
    document.addEventListener('click', this.handleOutsideClick)
    this.mounted && this.setState({ isOpen: true })
  }

  private handleOutsideClick = (e: MouseEvent) => {
    if (
      this.triggerRef.current &&
      this.triggerRef.current.contains(e.target as Node)
    ) {
      return
    }

    if (
      this.portalRef.current &&
      this.portalRef.current.contains(e.target as Node)
    ) {
      return
    }

    this.close()
  }

  private toggle = () => {
    if (this.state.isOpen) this.close()
    else this.open()
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

    this.close()
  }
}
