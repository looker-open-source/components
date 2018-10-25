import * as React from 'react'
import {
  Manager,
  Popper,
  PopperProps,
  Reference,
  RefHandler,
} from 'react-popper'
import { Box } from '../Box'

export interface DelayHolder {
  show?: number
  hide?: number
}

export type OverlayTriggerEvent = 'hover' | 'click' | 'focus'

export interface OverlayTriggerProps {
  popper: PopperProps['children']
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: PopperProps['placement']
  /**
   * When true, renders the popover as open immediately.
   * @default false
   */
  showImmediately?: boolean
  /**
   * The kind of interaction that triggers the Overlay to render.
   */
  trigger?: OverlayTriggerEvent | OverlayTriggerEvent[]
  zIndex?: number
  backdropColor?: string
  backdropOpacity?: number

  delay?: number | DelayHolder
}

export interface OverlayTriggerState {
  show: boolean
}

const normalizeDelay = (delay?: number | DelayHolder): DelayHolder => {
  return delay && typeof delay === 'object'
    ? delay
    : { show: delay, hide: delay }
}

export class OverlayTrigger extends React.Component<
  OverlayTriggerProps,
  OverlayTriggerState
> {
  public static defaultProps = {
    backdropColor: 'palette.charcoal200',
    backdropOpacity: 0.4,
    showImmediately: false,
    trigger: ['hover', 'focus'],
  }

  private timeout?: number
  private hoverState?: string
  private popperRef: HTMLElement | null
  private triggerRef: HTMLElement | null

  constructor(props: OverlayTriggerProps) {
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
    let triggers: OverlayTriggerEvent[] = []
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
        bg={this.props.backdropColor}
        opacity={this.props.backdropOpacity}
        zIndex={this.props.zIndex}
      />
    )

    return (
      <Manager>
        {this.state.show && Backdrop}
        <Reference innerRef={setTriggerRef}>
          {({ ref }) => (
            <Box
              display="inline-block"
              position="relative"
              innerRef={ref}
              zIndex={this.props.zIndex}
            >
              {React.cloneElement(child, { ...triggerProps })}
            </Box>
          )}
        </Reference>
        {this.state.show && (
          <Popper placement={props.placement} innerRef={setPopperRef}>
            {props.popper}
          </Popper>
        )}
      </Manager>
    )
  }
}
