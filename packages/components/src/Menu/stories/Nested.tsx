/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Menu, MenuItem, Button } from '../..'

export default function Nested() {
  return (
    <Menu
      content={
        <>
          <MenuItem
            nestedMenu={
              <>
                <MenuItem>Camembert</MenuItem>
                <MenuItem>Comté</MenuItem>
              </>
            }
          >
            French
          </MenuItem>
          <MenuItem
            nestedMenu={
              <>
                <MenuItem>Gouda</MenuItem>
                <MenuItem>Limburger</MenuItem>
              </>
            }
          >
            Dutch
          </MenuItem>
        </>
      }
    >
      <Button>Cheese</Button>
    </Menu>
  )
}
