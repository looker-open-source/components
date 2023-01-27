/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function Positioning() {
  return (
    <Space bg="ui3" m="u1">
      <Box p="u3" position="relative">
        <Box
          position="absolute"
          top="0"
          right="0"
          bg="negative"
          color="inverseOn"
        >
          I'm absolutely positioned!
        </Box>
      </Box>
    </Space>
  )
}
