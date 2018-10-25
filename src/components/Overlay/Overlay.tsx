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

export interface DelayHolder {
  show?: number
  hide?: number
}

export type OverlayEvent = 'hover' | 'click' | 'focus'

export interface OverlayContentProps {
  arrowProps: PopperArrowProps
  placement: Placement
}

export interface OverlayProps {
  theme: Theme
  backdrop?: boolean
  backdropStyles?: React.CSSProperties
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

  /**
   * The kind of interaction that triggers the Overlay to render.
   */
  trigger?: OverlayEvent | OverlayEvent[]

  delay?: number | DelayHolder
}

interface OverlayPropsWithContent extends OverlayProps {
  overlayContentFactory: (props: OverlayContentProps) => React.ReactNode
}

export interface OverlayState {
  show: boolean
}

const normalizeDelay = (delay?: number | DelayHolder): DelayHolder => {
  return delay && typeof delay === 'object'
    ? delay
    : { show: delay, hide: delay }
}

class InternalOverlay extends React.Component<
  OverlayPropsWithContent,
  OverlayState
> {
  public static defaultProps: OverlayProps = {
    backdrop: false,
    showImmediately: false,
    theme: {} as Theme,
    trigger: ['hover', 'focus'],
  }

  private timeout?: number
  private hoverState?: string
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

  public componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  public getChildProps() {
    return React.Children.only(this.props.children).props
  }

  public handleShow = () => {
    clearTimeout(this.timeout)
    this.hoverState = 'show'
    const delay = normalizeDelay(this.props.delay)
    if (!delay.show) {
      this.show()
      return
    }
    this.timeout = window.setTimeout(() => {
      if (this.hoverState === 'show') this.show()
    }, delay.show)
  }

  public handleHide = () => {
    clearTimeout(this.timeout)
    this.hoverState = 'hide'
    const delay = normalizeDelay(this.props.delay)
    if (!delay.hide) {
      this.hide()
      return
    }
    this.timeout = window.setTimeout(() => {
      if (this.hoverState === 'hide') this.hide()
    }, delay.hide)
  }

  public handleFocus = (e: React.MouseEvent) => {
    const { onFocus } = this.getChildProps()
    this.handleShow()
    if (onFocus) onFocus(e)
  }

  public handleBlur = (e: React.MouseEvent) => {
    const { onBlur } = this.getChildProps()
    this.handleHide()
    if (onBlur) onBlur(e)
  }

  public handleClick = (e: React.MouseEvent) => {
    const { onClick } = this.getChildProps()
    if (this.state.show) this.hide()
    else this.show()
    if (onClick) onClick(e)
  }

  public handleMouseOver = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.handleShow, e)

  public handleMouseOut = (e: React.MouseEvent) =>
    this.handleMouseOverOut(this.handleHide, e)

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  public handleMouseOverOut(
    handler: (e: React.MouseEvent) => void,
    e: React.MouseEvent
  ) {
    const target = e.currentTarget
    const related = e.relatedTarget

    const doAction =
      ((!related || related !== target) && !this.popperRef) ||
      (this.popperRef &&
        related instanceof Element &&
        !this.popperRef.contains(related))

    // Possibly check if the hover is the Popover, and optionally don't close here,
    // allowing for hover triggered popovers that can contain interactive content.

    if (doAction) {
      handler(e)
    }
  }

  public hide() {
    this.setState({ show: false })
  }

  public show() {
    this.setState({ show: true })
  }

  public render() {
    const { trigger, children, ...props } = this.props
    const child = React.Children.only(children)
    const triggerProps: any = {}
    let triggers: OverlayEvent[] = []
    triggers = triggers.concat(trigger ? trigger : [])
    const includes = (ary: any[], item: any) => ary.indexOf(item) >= 0
    const triggerActions = {
      click: includes(triggers, 'click'),
      focus: includes(triggers, 'focus'),
      hover: includes(triggers, 'hover'),
    }
    delete props.delay

    if (triggerActions.click) {
      triggerProps.onClick = this.handleClick
    }

    if (triggerActions.focus) {
      triggerProps.onFocus = this.handleShow
      triggerProps.onBlur = this.handleHide
    }

    if (triggerActions.hover) {
      triggerProps.onMouseOver = this.handleMouseOver
      triggerProps.onMouseOut = this.handleMouseOut
    }

    const bodyClickListener = (event: MouseEvent) => {
      if (event.target instanceof Element) {
        const clickOutsidePopper =
          this.popperRef && !this.popperRef.contains(event.target)
        const clickOutsideTrigger =
          this.triggerRef && !this.triggerRef.contains(event.target)
        if (clickOutsidePopper) {
          document.body.removeEventListener('click', bodyClickListener)
          if (clickOutsideTrigger) {
            this.handleHide()
          }
        }
      }
    }

    const popperRefMouseLeaveListener = () => {
      if (this.popperRef) {
        this.popperRef.removeEventListener(
          'mouseleave',
          popperRefMouseLeaveListener
        )
      }
      this.handleHide()
    }

    const setTriggerRef: RefHandler = node => {
      this.triggerRef = node
    }

    const setPopperRef: RefHandler = node => {
      this.popperRef = node
      if (this.popperRef) {
        if (triggerActions.hover) {
          this.popperRef.addEventListener(
            'mouseleave',
            popperRefMouseLeaveListener
          )
        }

        if (triggerActions.click) {
          document.body.addEventListener('click', bodyClickListener)
        }
      }
    }

    const Backdrop = (
      <Box
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bg="palette.charcoal200"
        opacity="0.7"
        zIndex={this.props.theme.components.Overlay.zIndex || 1}
        style={this.props.backdropStyles}
      />
    )

    return (
      <Manager>
        {this.state.show && this.props.backdrop && Backdrop}
        <Reference innerRef={setTriggerRef}>
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
              {React.cloneElement(child, { ...triggerProps })}
            </Box>
          )}
        </Reference>
        {this.state.show && (
          <Popper placement={props.placement} innerRef={setPopperRef}>
            {({ ref, style, arrowProps, placement }) => (
              <Box
                style={style}
                innerRef={ref}
                zIndex={this.props.theme.components.Overlay.zIndex || 1}
              >
                {this.props.overlayContentFactory({ arrowProps, placement })}
              </Box>
            )}
          </Popper>
        )}
      </Manager>
    )
  }
}

export const Overlay = withTheme(InternalOverlay)
