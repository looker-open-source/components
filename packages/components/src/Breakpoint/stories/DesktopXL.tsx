/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Paragraph, Breakpoint, Box2 } from '../..'
export default function DesktopXL() {
  return (
    <Box2>
      <Paragraph mb="u3">Resize window to watch content change:</Paragraph>
      <Breakpoint show={['desktop', 'xl']}>
        <Box2 bg="keyAccent" p="u5">
          Desktop (1025px - 1200px) and xl screens (1201px and greater)
        </Box2>
      </Breakpoint>
    </Box2>
  )
}
