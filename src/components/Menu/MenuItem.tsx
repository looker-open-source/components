import * as React from 'react'
import { styled } from '../../style'
import { Box } from '../Box'
import { MenuElement, MenuElementProps } from './MenuElement'

const MenuItemInternal: React.SFC<MenuElementProps> = ({
  children,
  ...props
}) => {
  return (
    <MenuElement {...props} role="menuitem">
      <Box flex="1" is="button" role="menuitem">
        {children}
      </Box>
    </MenuElement>
  )
}

export const MenuItem = styled(MenuItemInternal)`
  ${Box} {
    text-align: left;
    outline: none;
    background: transparent;
    color: inherit;
    &:hover {
      background: inherit;
    }
  }
`
