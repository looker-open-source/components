/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Button } from '../..'

export default function Density() {
  return (
    <Menu
      content={
        <>
          <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
          <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
        </>
      }
      density={-3}
    >
      <Button>Cheese</Button>
    </Menu>
  )
}
