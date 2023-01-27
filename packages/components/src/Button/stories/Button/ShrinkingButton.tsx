/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Button, Box2 } from '../../..'

export default function ShrinkingButton() {
  return (
    <Box2 display="flex" width={200}>
      <Box2 width={250}>Some text</Box2>
      <Button>Don't shrink me</Button>
    </Box2>
  )
}
