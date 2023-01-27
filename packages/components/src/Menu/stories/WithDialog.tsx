/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { MouseEvent } from 'react'
import React from 'react'
import { Menu, MenuItem, Button, Dialog, DialogLayout } from '../..'
import { useToggle } from '../../utils'

export default function WithDialog() {
  const { value, setOn, setOff } = useToggle()
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    setOn()
  }

  return (
    <>
      <Menu
        content={
          <>
            <MenuItem onClick={setOn}>Open Dialog</MenuItem>
            <MenuItem onClick={handleClick}>
              Open Dialog, keep Menu open
            </MenuItem>
          </>
        }
      >
        <Button>Menu with Dialog</Button>
      </Menu>
      <Dialog isOpen={value} onClose={setOff}>
        <DialogLayout
          footer={<Button onClick={setOff}>Close</Button>}
          header="A Dialog"
        >
          Dialog must be placed outside of Menu
        </DialogLayout>
      </Dialog>
    </>
  )
}
