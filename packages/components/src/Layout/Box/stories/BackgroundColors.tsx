/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space, Code } from '../../..'

export default function BackgroundColors() {
  return (
    <Space bg="ui3" m="u1">
      <Box bg="positive" color="inverseOn" p="u4">
        My background is <Code>positive</Code>.
      </Box>
    </Space>
  )
}
