/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Space, Text, Button } from '../../..'

export default function Controlled() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Space>
      <Menu
        isOpen={isOpen}
        setOpen={setOpen}
        content={
          <>
            <MenuItem icon={<MaterialIcons.Email />}>Email</MenuItem>
            <MenuItem icon={<MaterialIcons.TableChart />}>Spreadsheet</MenuItem>
          </>
        }
      >
        <Button>Export</Button>
      </Menu>
      <Text>{isOpen ? 'Menu Open' : 'Menu Closed'}</Text>
    </Space>
  )
}
