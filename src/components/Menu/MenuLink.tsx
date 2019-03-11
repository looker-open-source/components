import * as React from 'react'
import { styled } from '../../style'
import { Link } from '../Link'
import { MenuElement, MenuElementProps } from './MenuElement'

export interface MenuLinkProps extends MenuElementProps {
  href: string
  target?: string
}

const MenuLinkInternal: React.SFC<MenuLinkProps> = ({
  href,
  target,
  children,
  ...props
}) => {
  return (
    <MenuElement {...props}>
      <Link flex="1" href={href} target={target} color="inherit">
        {children}
      </Link>
    </MenuElement>
  )
}

export const MenuLink = styled(MenuLinkInternal)``
