/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Button, Space } from '../..'

export default function IconPlaceholder() {
  return (
    <Space>
      <Menu
        content={
          <>
            <MenuItem icon={<MaterialIcons.DateRange />}>Calendar</MenuItem>
            <MenuItem>No icon</MenuItem>
            <MenuItem icon={<MaterialIcons.PivotTableChart />}>Pivot</MenuItem>
          </>
        }
      >
        <Button>No Icon Gutter</Button>
      </Menu>
      <Menu
        iconGutter
        content={
          <>
            <MenuItem icon={<MaterialIcons.DateRange />}>Calendar</MenuItem>
            <MenuItem>No icon</MenuItem>
            <MenuItem icon={<MaterialIcons.PivotTableChart />}>Pivot</MenuItem>
          </>
        }
      >
        <Button>Icon Gutter</Button>
      </Menu>
    </Space>
  )
}
