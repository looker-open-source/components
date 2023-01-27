/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { MenuList, Tooltip, MenuItem } from '../../..'

export default function WithTooltip() {
  return (
    <MenuList>
      <Tooltip content="It is gouda!" placement="left">
        <MenuItem>Gouda</MenuItem>
      </Tooltip>
    </MenuList>
  )
}
