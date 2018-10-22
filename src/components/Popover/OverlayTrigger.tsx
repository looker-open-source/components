import * as React from 'react'
import { Manager, Popper, Reference } from 'react-popper'

export interface DelayHolder {
  show?: number
  hide?: number
}

export type OverlayTriggers = 'hover' | 'click' | 'focus'

export interface OverlayTriggerDefaultProps {
  defaultShow: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  trigger?: OverlayTriggers | OverlayTriggers[]
  zIndex?: number
}

export interface OverlayTriggerProps extends OverlayTriggerDefaultProps {
  children?: React.ReactChildren
  delay?: number | DelayHolder
  // Todo: Make these a concrete types
  overlay: any
  target?: any
  onHide?: any
  show?: any
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
  public static defaultProps: OverlayTriggerDefaultProps
  private timeout?: number
  private hoverState?: string

  constructor(props: OverlayTriggerProps) {
    super(props)
    this.state = {
      show: !!props.defaultShow,
    }
  }

  //   // We add aria-describedby in the case where the overlay is a role="tooltip"
  //   // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.
  //   this.ariaModifier = {
  //     enabled: true,
  //     order: 900,
  //     fn: data => {
  //       const { popper } = data.instance;
  //       const target = this.getTarget();
  //       if (!this.state.show || !target) return data;

  //       const role = popper.getAttribute('role') || '';
  //       if (popper.id && role.toLowerCase() === 'tooltip') {
  //         target.setAttribute('aria-describedby', popper.id);
  //       }
  //       return data;
  //     },
  //   };
  // }

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
      (!related || related !== target) &&
      !target.contains(related as Element)
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
    const { trigger, overlay, children, ...props } = this.props

    delete props.delay

    const child = React.Children.only(children)

    const triggerProps: any = {}

    let triggers: OverlayTriggers[] = []
    triggers = triggers.concat(trigger ? trigger : [])

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow
      triggerProps.onBlur = this.handleHide
    }

    if (triggers.indexOf('hover') !== -1) {
      // warning(
      //   triggers.length >= 1,
      //   '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' +
      //     'visibility of the overlay to just mouse users. Consider also ' +
      //     'including the `"focus"` trigger so that touch and keyboard only ' +
      //     'users can see the overlay as well.'
      // )
      triggerProps.onMouseOver = this.handleMouseOver
      triggerProps.onMouseOut = this.handleMouseOut
    }

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref}>
              {React.cloneElement(child, { ...triggerProps })}
            </div>
          )}
        </Reference>
        {this.state.show && (
          <Popper placement={props.placement}>
            {({ ref, style, placement }) => {
              return (
                <div
                  ref={ref}
                  style={Object.assign({ zIndex: this.props.zIndex }, style)}
                  data-placement={placement}
                >
                  {overlay}
                </div>
              )
            }}
          </Popper>
        )}
      </Manager>
    )
  }
}

OverlayTrigger.defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus'],
  zIndex: 100,
}
