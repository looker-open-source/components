/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Button } from '../..'
import type { MenuProps } from '../Menu'

export default function Basic(props: MenuProps) {
  const {
    content = (
      <>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </>
    ),
    ...rest
  } = props

  return (
    <Menu content={content} {...rest}>
      <Button>Cheese</Button>
    </Menu>
  )
}
