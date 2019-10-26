import React, { Component, ReactNode } from 'react'

interface MockedCSSTransitionProps {
  in: boolean
  classNames: string
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  timeout: number | { enter: number; exit: number }
  children: (state: string) => ReactNode
}

class CSSTransition extends Component<MockedCSSTransitionProps> {
  public render() {
    return <>{this.props.in && this.props.children('faux')}</>
  }
}

export default CSSTransition
