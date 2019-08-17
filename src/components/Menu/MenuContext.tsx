import * as React from 'react'
import { MenuItemCustomization } from './MenuItem/menuItemCustomization'

export interface MenuContextProps {
  customizationProps?: MenuItemCustomization
  compact?: boolean
}

export const MenuContext = React.createContext<MenuContextProps>({})

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
