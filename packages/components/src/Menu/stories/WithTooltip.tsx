/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Button, Tooltip } from '../..'

export default function WithTooltip() {
  return (
    <Menu
      content={
        <>
          <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
          <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
        </>
      }
    >
      <Tooltip placement="top" content="Select your favorite kind">
        <Button>Cheese</Button>
      </Tooltip>
    </Menu>
  )
}
