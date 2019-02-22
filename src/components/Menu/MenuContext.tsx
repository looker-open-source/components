import * as React from 'react'

export interface MenuContextProps {
  canActivate?: boolean
}

const context: MenuContextProps = {}

export const MenuContext = React.createContext(context)

export function withMenu<T extends MenuContextProps>(
  Component: React.ComponentType<T>
) {
  return function wrapContext(props: T) {
    return (
      <MenuContext.Consumer>
        {contextProps => <Component {...props} {...contextProps} />}
      </MenuContext.Consumer>
    )
  }
}
