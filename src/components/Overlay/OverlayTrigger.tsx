import * as React from 'react'
import {
  Manager,
  Popper,
  PopperProps,
  Reference,
  ReferenceProps,
  RefHandler,
} from 'react-popper'

export interface DelayHolder {
  show?: number
  hide?: number
}

export type OverlayTriggers = 'hover' | 'click' | 'focus'

export interface OverlayTriggerProps {
  defaultShow?: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  trigger?: OverlayTriggers | OverlayTriggers[]
  popper: PopperProps['children']
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
    defaultShow: false,
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
      show: !!props.defaultShow,
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

    // Possibly check if the hover is the Popover, and optionally don't close here,
    // allowing for hover triggered popovers that can contain interactive content.
    if (
      ((!related || related !== target) && !this.popperRef) ||
      (this.popperRef &&
        related instanceof Element &&
        !this.popperRef.contains(related))
    ) {
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
    let triggers: OverlayTriggers[] = []
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

    const setPopperInnerRef: RefHandler = node => {
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

    // This simply passes the ref through correctly if it's a v3 Styled Component
    // or a regular React node (eg <div>)
    const triggerCloneElement: ReferenceProps['children'] = ({ ref }) => {
      const isStyledComponent =
        typeof child.type === 'function' &&
        child.type.name === 'StyledComponent'
      const cloneProps = isStyledComponent
        ? { innerRef: ref, ...triggerProps }
        : { ref, ...triggerProps }
      return React.cloneElement(child, cloneProps)
    }

    return (
      <Manager>
        <Reference innerRef={setTriggerRef}>{triggerCloneElement}</Reference>
        {this.state.show && (
          <Popper placement={props.placement} innerRef={setPopperInnerRef}>
            {props.popper}
          </Popper>
        )}
      </Manager>
    )
  }
}
