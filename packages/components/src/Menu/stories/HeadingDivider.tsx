/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Menu, MenuItem, Button, MenuHeading, MenuDivider } from '../..'

export default function HeadingDivider() {
  return (
    <Menu
      content={
        <>
          <MenuHeading>Good Cheeses</MenuHeading>
          <MenuItem>Cheddar</MenuItem>
          <MenuItem>Swiss</MenuItem>
          <MenuItem>Brie</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuHeading>Great Cheeses</MenuHeading>
          <MenuItem>Pepper Jack</MenuItem>
          <MenuItem>String Cheese</MenuItem>
        </>
      }
    >
      <Button>Menu with headings and dividers</Button>
    </Menu>
  )
}
