import { Placement } from 'popper.js'
import * as React from 'react'
import {
  Manager,
  Popper,
  PopperArrowProps,
  Reference,
  RefHandler,
} from 'react-popper'
import { Theme, withTheme } from '../../style'
import { Box } from '../Box'

export type OverlayEvent = 'hover' | 'click'

export interface OverlayContentProps {
  arrowProps: PopperArrowProps
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
  showImmediately?: boolean
}

export interface OverlayProps extends OverlayInteractiveProps {
  theme: Theme
  backdropStyles?: React.CSSProperties
  /**
   * The kind of interaction that triggers the Overlay to render.
   */
  trigger?: OverlayEvent
}

interface OverlayPropsWithContent extends OverlayProps {
  overlayContentFactory: (props: OverlayContentProps) => React.ReactNode
}

export interface OverlayState {
  show: boolean
}

class InternalOverlay extends React.Component<
  OverlayPropsWithContent,
  OverlayState
> {
  public static defaultProps: OverlayProps = {
    showImmediately: false,
    theme: {} as Theme,
    trigger: 'hover',
  }

  private popperRef: HTMLElement | null
  private triggerRef: HTMLElement | null

  constructor(props: OverlayPropsWithContent) {
    super(props)
    this.popperRef = null
    this.triggerRef = null
    this.state = {
      show: !!props.showImmediately,
    }
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.handleEscapePress)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapePress)
  }

  public handleClick = () => {
    if (this.state.show) this.hide()
    else this.show()
  }

  public handleMouseOver = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.show, e)

  public handleMouseOut = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.hide, e)

  public handleMouseOverOut(
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

  public hide = () => {
    this.setState({ show: false })
  }

  public show = () => {
    this.setState({ show: true })
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
        bg={this.props.theme.components.Overlay.backdrop.backgroundColor}
        opacity={this.props.theme.components.Overlay.backdrop.opacity}
        zIndex={this.props.theme.components.Overlay.zIndex || 1}
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
                  ? this.props.theme.components.Overlay.zIndex || 1
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
                zIndex={this.props.theme.components.Overlay.zIndex || 1}
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

  private setPopperRef: RefHandler = node => (this.popperRef = node)

  private setTriggerRef: RefHandler = node => (this.triggerRef = node)

  private handleEscapePress = (event: KeyboardEvent) => {
    this.props.trigger === 'click' &&
      this.state.show &&
      event.key === 'Escape' &&
      this.hide()
  }
}

export const Overlay = withTheme(InternalOverlay)
