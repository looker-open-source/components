/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Paragraph, Breakpoint, Box2 } from '../..'
export default function Desktop() {
  return (
    <Box2>
      <Paragraph mb="u3">Resize window to watch content change:</Paragraph>
      <Breakpoint show="desktop">
        <Box2 bg="positiveAccent" p="u5" mt="u3">
          Show on desktop only (1025px – 1200px)
        </Box2>
      </Breakpoint>
    </Box2>
  )
}
