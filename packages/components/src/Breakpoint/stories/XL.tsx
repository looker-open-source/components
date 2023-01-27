/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Paragraph, Breakpoint, Box2 } from '../..'
export default function XL() {
  return (
    <Box2>
      <Paragraph mb="u3">Resize window to watch content change:</Paragraph>
      <Breakpoint show="xl">
        <Box2 bg="informAccent" p="u5" mt="u3">
          Show on XL only (1201px and larger)
        </Box2>
      </Breakpoint>
    </Box2>
  )
}
