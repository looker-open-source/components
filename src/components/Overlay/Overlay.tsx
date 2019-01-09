import { Placement } from 'popper.js'
import * as React from 'react'
import {
  Manager,
  Popper,
  PopperArrowProps,
  Reference,
  RefHandler,
} from 'react-popper'
import { Theme } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { Box } from '../Box'

export type OverlayEvent = 'hover' | 'click'

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
   * A Lens compatible theme object. This is passed in automatically by the
   * withTheme higher-order helper.
   */
  theme: Theme
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
}

export interface OverlayState {
  show: boolean
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
    theme: {} as Theme,
    trigger: 'hover',
  }
  private popperRef: HTMLElement | null
  private triggerRef: HTMLElement | null

  constructor(props: OverlayProps) {
    super(props)
    this.popperRef = null
    this.triggerRef = null
    this.state = {
      show: !!props.open,
    }
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.handleEscapePress)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapePress)
  }

  public render() {
    const { trigger, children, ...props } = this.props
    const child = React.Children.only(children)
    const triggerEventProps: React.DOMAttributes<{}> = {}
    const popperEventProps: React.DOMAttributes<{}> = {}

    if (trigger === 'click') {
      triggerEventProps.onClick = this.handleClick
    }

    if (trigger === 'hover') {
      triggerEventProps.onFocus = this.show
      triggerEventProps.onBlur = this.hide
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
        {this.state.show && trigger === 'click' && Backdrop}
        <Reference innerRef={this.setTriggerRef}>
          {({ ref }) => (
            <Box
              display="inline-block"
              position="relative"
              innerRef={ref}
              zIndex={
                this.state.show
                  ? CustomizableOverlayAttributes.zIndex || 1
                  : undefined
              }
            >
              {React.cloneElement(child, { ...triggerEventProps })}
            </Box>
          )}
        </Reference>
        {this.state.show && (
          <Popper placement={props.placement} innerRef={this.setPopperRef}>
            {({ ref, style, arrowProps, placement }) => (
              <Box
                style={style}
                innerRef={ref}
                zIndex={CustomizableOverlayAttributes.zIndex || 1}
                {...popperEventProps}
              >
                {this.props.overlayContentFactory({ arrowProps, placement })}
              </Box>
            )}
          </Popper>
        )}
      </Manager>
    )
  }

  private handleClick = () => {
    if (this.state.show) this.hide()
    else this.show()
  }

  private handleMouseOver = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.show, e)

  private handleMouseOut = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.hide, e)

  private handleMouseOverOut(
    handler: (e: React.MouseEvent) => void,
    e: React.MouseEvent
  ) {
    const target = e.currentTarget
    const related = e.relatedTarget

    const showPopper =
      !this.state.show && this.triggerRef && this.triggerRef.contains(target)

    const mouseDidNotMoveFromTriggerToPopper =
      this.popperRef &&
      related instanceof Element &&
      !this.popperRef.contains(related)

    const mouseDidNotMoveFromPopperToTrigger =
      this.triggerRef &&
      related instanceof Element &&
      !this.triggerRef.contains(related)

    const hidePopper =
      this.state.show &&
      mouseDidNotMoveFromPopperToTrigger &&
      mouseDidNotMoveFromTriggerToPopper

    if (showPopper || hidePopper) {
      handler(e)
    }
  }

  private hide = () => {
    this.setState({ show: false })
  }

  private show = () => {
    this.setState({ show: true })
  }

  private setPopperRef: RefHandler = node => (this.popperRef = node)

  private setTriggerRef: RefHandler = node => (this.triggerRef = node)

  private handleEscapePress = (event: KeyboardEvent) => {
    this.props.trigger === 'click' &&
      this.state.show &&
      event.key === 'Escape' &&
      this.hide()
  }
}

export interface CustomizableOverlayAttributes extends CustomizableAttributes {
  zIndex: number
  backdrop: {
    backgroundColor: string
    opacity: number
  }
}

export const CustomizableOverlayAttributes: CustomizableOverlayAttributes = {
  backdrop: {
    backgroundColor: 'palette.charcoal200',
    opacity: 0.6,
  },
  zIndex: 0,
}
