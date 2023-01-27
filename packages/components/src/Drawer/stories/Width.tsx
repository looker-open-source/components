/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Drawer, Button } from '../..'

export default function Width() {
  return (
    <Drawer content="Something in the drawer" width="50rem">
      <Button>Open Drawer</Button>
    </Drawer>
  )
}
