import styled from 'styled-components'
import {
  reset,
  space,
  CompatibleHTMLProps,
  SpaceProps,
} from 'looker-design-tokens'

export interface MenuItemButtonProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLElement> {}

export const MenuItemButton = styled.button<MenuItemButtonProps>`
  ${reset}
  ${space}

  align-items: center;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: inherit;
  flex: 1;
  outline: none;
  text-align: left;
  text-decoration: none;
`
