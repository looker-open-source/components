import * as React from 'react'
import { styled } from '../../../style'
import { Box } from '../../Box'
import { MenuItemProps } from './MenuItem'

const MenuItemButtonFactory = (props: MenuItemProps) => <Box {...props} />

export const MenuItemButton = styled(MenuItemButtonFactory)`
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
