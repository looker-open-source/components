/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { MenuItem, MenuList } from '../../..'
import type { MenuListProps } from '../MenuList'

export default function Basic(props: MenuListProps) {
  return (
    <MenuList {...props}>
      <MenuItem onClick={() => alert('Hello world!')}>Gouda</MenuItem>
      <MenuItem>Cheddar</MenuItem>
      <MenuItem>Swiss</MenuItem>
    </MenuList>
  )
}
