import * as React from 'react'

export interface ScrollLockState {
  initial?: string | null
}

export class ScrollLock extends React.Component<{}, ScrollLockState> {
  public componentDidMount() {
    this.setState({ initial: document.body.style.overflow })
    document.body.style.overflow = 'hidden'
  }

  public componentWillUnmount() {
    this.state.initial !== undefined &&
      (document.body.style.overflow = this.state.initial)
  }

  public render() {
    return null
  }
}
