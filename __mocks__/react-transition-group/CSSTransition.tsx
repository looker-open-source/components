import * as React from 'react'

interface MockedCSSTransitionProps {
  in: boolean
  classNames: string
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  timeout: number | { enter: number; exit: number }
  children: (state: string) => React.ReactNode
}

class CSSTransition extends React.Component<MockedCSSTransitionProps> {
  public render() {
    return <>{this.props.in && this.props.children('faux')}</>
  }
}

export default CSSTransition
