/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Button, Box2 } from '../../..'

export default function ShrinkingIcon() {
  return (
    <Box2 display="flex">
      <Box2 width="100%">Some text</Box2>
      <Button iconBefore={<MaterialIcons.AddCircle />}>Button</Button>
    </Box2>
  )
}
