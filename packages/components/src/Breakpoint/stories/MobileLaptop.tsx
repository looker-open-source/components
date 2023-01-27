/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Paragraph, Breakpoint, Box2 } from '../..'
export default function MobileLaptop() {
  return (
    <Box2>
      <Paragraph mb="u3">Resize window to watch content change:</Paragraph>
      <Breakpoint show={['mobile', 'laptop']}>
        <Box2 bg="criticalAccent" p="u5">
          Render on Mobile (1px – 480px), Tablet (481px – 768px), and Laptop
          (769px – 1024px)
        </Box2>
      </Breakpoint>
    </Box2>
  )
}
