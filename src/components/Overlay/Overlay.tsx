import { Placement } from 'popper.js'
import * as React from 'react'
import FocusTrap from 'react-focus-trap'
import {
  Manager,
  Popper,
  PopperArrowProps,
  Reference,
  RefHandler,
} from 'react-popper'
import { palette } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { Box } from '../Box'
import { ModalContext } from '../Modal'

export type OverlayEvent = 'hover' | 'click' | 'clickTriggerOnly'

export interface OverlayContentProps {
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
}

export interface OverlayInteractiveProps {
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
}

export interface OverlayProps extends OverlayInteractiveProps {
  /**
   * Expects a callback that returns the actual overlay content to render. The
   * callback receives the following props:
   *
   * **arrowProps**: properties used to correctly position the arrow on a
   * content bubble **placement**: the location of the arrow.
   *
   * See OverlayBubble.tsx for an example of how to use these properties.
   */
  overlayContentFactory: (props: OverlayContentProps) => React.ReactNode
  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdropStyles?: React.CSSProperties
  /**
   * The kind of interaction that triggers the Overlay to render.
   */
  trigger?: OverlayEvent

  className?: string
}

export interface OverlayState {
  isOpen: boolean
}

/**
 * Overlay is a low-level component that can be used to build Popovers,
 * Tooltips, Modals, etc. It handles coordinating a trigger component, like a
 * Button or Link, with the rendering of an "overlay" or "content bubble" that
 * appears above other content in the page.
 *
 * Under the hood, Overlay is powered by [Popper.js](https://popper.js.org/) and
 * its corresponding [React library,
 * react-popper](https://github.com/FezVrasta/react-popper).
 */
export class Overlay extends React.Component<OverlayProps, OverlayState> {
  public static defaultProps: OverlayProps = {
    open: false,
    overlayContentFactory: () => null,
    trigger: 'hover',
  }

  private popperRef: HTMLElement | null
  private triggerRef: HTMLElement | null

  constructor(props: OverlayProps) {
    super(props)
    this.popperRef = null
    this.triggerRef = null
    this.state = { isOpen: !!props.open }
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.handleEscapePress)
    document.addEventListener('click', this.handleOutsideClick)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapePress)
    document.removeEventListener('click', this.handleOutsideClick)
  }

  public render() {
    const { className, trigger, children, ...props } = this.props
    const child = React.Children.only(children)
    const triggerEventProps: React.DOMAttributes<{}> = {}
    const popperEventProps: React.DOMAttributes<{}> = {}

    if (trigger === 'click' || trigger === 'clickTriggerOnly') {
      triggerEventProps.onClick = this.handleClick
    }

    if (trigger === 'hover') {
      triggerEventProps.onFocus = this.open
      triggerEventProps.onBlur = this.close
      triggerEventProps.onMouseOver = this.handleMouseOver
      triggerEventProps.onMouseOut = this.handleMouseOut
      popperEventProps.onMouseOut = this.handleMouseOut
    }

    const Backdrop = (
      <Box
        onClick={this.handleClick}
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bg={CustomizableOverlayAttributes.backdrop.backgroundColor}
        opacity={CustomizableOverlayAttributes.backdrop.opacity}
        zIndex={CustomizableOverlayAttributes.zIndex || 1}
        style={this.props.backdropStyles}
      />
    )

    return (
      <Manager>
        {this.state.isOpen && trigger === 'click' && Backdrop}
        <Reference innerRef={this.setTriggerRef}>
          {({ ref }) => (
            <Box
              className={className}
              display="inline-block"
              position="relative"
              innerRef={ref}
              zIndex={
                this.state.isOpen
                  ? CustomizableOverlayAttributes.zIndex || 1
                  : undefined
              }
            >
              {React.cloneElement(child, { ...triggerEventProps })}
            </Box>
          )}
        </Reference>
        {this.state.isOpen && (
          <Popper placement={props.placement} innerRef={this.setPopperRef}>
            {({ ref, style, arrowProps, placement }) => (
              <FocusTrap active>
                <ModalContext.Provider value={{ closeModal: this.close }}>
                  <Box
                    style={style}
                    innerRef={ref}
                    zIndex={CustomizableOverlayAttributes.zIndex || 1}
                    {...popperEventProps}
                  >
                    {this.props.overlayContentFactory({
                      arrowProps,
                      placement,
                    })}
                  </Box>
                </ModalContext.Provider>
              </FocusTrap>
            )}
          </Popper>
        )}
      </Manager>
    )
  }

  public close = () => {
    this.setState({ isOpen: false })
  }

  private handleClick = () => {
    if (this.state.isOpen) this.close()
    else this.open()
  }

  private handleOutsideClick = (e: MouseEvent) => {
    if (
      !this.triggerRef ||
      !this.popperRef ||
      !(e.target instanceof Element) ||
      this.props.trigger === 'clickTriggerOnly'
    ) {
      return
    }
    if (
      !this.triggerRef.contains(e.target) &&
      !this.popperRef.contains(e.target)
    ) {
      this.close()
    }
  }

  private handleMouseOver = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.open, e)

  private handleMouseOut = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.close, e)

  private handleMouseOverOut(
    handler: (e: React.MouseEvent) => void,
    e: React.MouseEvent
  ) {
    const target = e.currentTarget
    const related = e.relatedTarget

    const openPopper =
      !this.state.isOpen && this.triggerRef && this.triggerRef.contains(target)

    const mouseDidNotMoveFromTriggerToPopper =
      this.popperRef &&
      related instanceof Element &&
      !this.popperRef.contains(related)

    const mouseDidNotMoveFromPopperToTrigger =
      this.triggerRef &&
      related instanceof Element &&
      !this.triggerRef.contains(related)

    const closePopper =
      this.state.isOpen &&
      mouseDidNotMoveFromPopperToTrigger &&
      mouseDidNotMoveFromTriggerToPopper

    if (openPopper || closePopper) {
      handler(e)
    }
  }

  private open = () => {
    this.setState({ isOpen: true })
  }

  private setPopperRef: RefHandler = node => (this.popperRef = node)

  private setTriggerRef: RefHandler = node => (this.triggerRef = node)

  private handleEscapePress = (event: KeyboardEvent) => {
    this.props.trigger === 'click' &&
      this.state.isOpen &&
      event.key === 'Escape' &&
      this.close()
  }
}

export interface BackdropStyle {
  backgroundColor?: string
  opacity?: number
}

export interface CustomizableOverlayAttributesProps
  extends CustomizableAttributes {
  zIndex: number
  backdrop: BackdropStyle
}

export const CustomizableOverlayAttributes: CustomizableOverlayAttributesProps = {
  backdrop: { backgroundColor: palette.charcoal200, opacity: 0.6 },
  zIndex: 0,
}
