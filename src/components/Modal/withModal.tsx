import * as React from 'react'

import { ModalContext, ModalContextProps } from './ModalContext'

export function withModal<T extends ModalContextProps>(
  Component: React.ComponentType<T>
) {
  return function wrapContext(props: T) {
    return (
      <ModalContext.Consumer>
        {modal => <Component {...props} close={modal.close} />}
      </ModalContext.Consumer>
    )
  }
}
