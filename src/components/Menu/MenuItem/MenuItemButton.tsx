import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box } from '../../Box'
import { MenuItemProps } from './MenuItem'

export type MenuItemComponentType = FunctionComponent<MenuItemProps>
export type StyledMenuItemComponentType = StyledComponent<
  MenuItemComponentType,
  MenuItemProps
>
const MenuItemButtonFactory = (props: MenuItemProps) => <Box {...props} />

export const MenuItemButton: StyledMenuItemComponentType = styled<
  MenuItemComponentType
>(MenuItemButtonFactory)`
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
