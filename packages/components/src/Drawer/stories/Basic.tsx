/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Drawer, Button } from '../..'

export default function Basic() {
  return (
    <Drawer content="Something in the drawer">
      <Button>Open Drawer</Button>
    </Drawer>
  )
}
