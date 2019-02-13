import * as React from 'react'

export interface ModalContextProps {
  closeModal?: (event?: React.SyntheticEvent, doCallbacks?: boolean) => void
}

const context: ModalContextProps = {}

export const ModalContext = React.createContext(context)

export function withModal<T extends ModalContextProps>(
  Component: React.ComponentType<T>
) {
  return function wrapContext(props: T) {
    return (
      <ModalContext.Consumer>
        {overlay => <Component {...props} closeModal={overlay.closeModal} />}
      </ModalContext.Consumer>
    )
  }
}
