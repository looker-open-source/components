import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Overlay } from 'react-overlays'
import { RefHolder } from './RefHolder'

export interface DelayHolder {
  show?: number
  hide?: number
}

export type OverlayTriggers = 'hover' | 'click' | 'focus'

export interface OverlayDefaultProps {
  defaultShow?: boolean
  trigger?: OverlayTriggers | OverlayTriggers[]
  rootClose?: boolean
}

export interface OverlayTriggerProps extends OverlayDefaultProps {
  children: React.ReactChildren
  overlay: any
  delay?: number | DelayHolder
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
  public static defaultProps: OverlayDefaultProps
  public trigger: React.RefObject<RefHolder>
  private timeout?: number
  private hoverState?: string

  constructor(props: OverlayTriggerProps) {
    super(props)
    this.trigger = React.createRef()
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

  public getTarget = () => {
    return this.trigger.current
      ? ReactDOM.findDOMNode(this.trigger.current)
      : null
  }

  // handleShow = () => {
  //   clearTimeout(this.timeout);
  //   this.hoverState = 'show';

  //   const delay = normalizeDelay(this.props.delay);

  //   if (!delay.show) {
  //     this.show();
  //     return;
  //   }

  //   this.timeout = setTimeout(() => {
  //     if (this.hoverState === 'show') this.show();
  //   }, delay.show);
  // };

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

  // handleFocus = e => {
  //   const { onFocus } = this.getChildProps();
  //   this.handleShow(e);
  //   if (onFocus) onFocus(e);
  // };

  // handleBlur = e => {
  //   const { onBlur } = this.getChildProps();
  //   this.handleHide(e);
  //   if (onBlur) onBlur(e);
  // };

  public handleClick = (e: React.MouseEvent) => {
    const { onClick } = this.getChildProps()

    if (this.state.show) this.hide()
    else this.show()

    if (onClick) onClick(e)
  }

  // handleMouseOver = e => {
  //   this.handleMouseOverOut(this.handleShow, e, 'fromElement');
  // };

  // handleMouseOut = e =>
  //   this.handleMouseOverOut(this.handleHide, e, 'toElement');

  // // Simple implementation of mouseEnter and mouseLeave.
  // // React's built version is broken: https://github.com/facebook/react/issues/4251
  // // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // // moving from one child element to another.
  // handleMouseOverOut(handler, e, relatedNative) {
  //   const target = e.currentTarget;
  //   const related = e.relatedTarget || e.nativeEvent[relatedNative];

  //   if ((!related || related !== target) && !contains(target, related)) {
  //     handler(e);
  //   }
  // }

  public hide() {
    this.setState({ show: false })
  }

  public show() {
    this.setState({ show: true })
  }

  public render() {
    const {
      trigger,
      overlay,
      children,
      // popperConfig = {},
      ...props
    } = this.props

    delete props.delay
    delete props.defaultShow

    const child = React.Children.only(children)

    const triggerProps: any = {}

    let triggers: OverlayTriggers[] = []
    triggers = triggers.concat(trigger ? trigger : [])

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick
    }

    // if (triggers.indexOf('focus') !== -1) {
    //   triggerProps.onFocus = this.handleShow
    //   triggerProps.onBlur = this.handleHide
    // }

    // if (triggers.indexOf('hover') !== -1) {
    //   warning(
    //     triggers.length >= 1,
    //     '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' +
    //       'visibility of the overlay to just mouse users. Consider also ' +
    //       'including the `"focus"` trigger so that touch and keyboard only ' +
    //       'users can see the overlay as well.'
    //   )
    //   triggerProps.onMouseOver = this.handleMouseOver
    //   triggerProps.onMouseOut = this.handleMouseOut
    // }

    return (
      <>
        <RefHolder ref={this.trigger}>
          {React.cloneElement(child, triggerProps)}
        </RefHolder>
        <Overlay
          {...props}
          // popperConfig={{
          //   ...popperConfig,
          //   modifiers: {
          //     ...popperConfig.modifiers,
          //     ariaModifier: this.ariaModifier,
          //   },
          // }}
          show={this.state.show}
          onHide={this.handleHide}
          target={this.getTarget}
        >
          {overlay}
        </Overlay>
      </>
    )
  }
}

OverlayTrigger.defaultProps = {
  defaultShow: false,
  rootClose: true,
  trigger: ['click'],
}
