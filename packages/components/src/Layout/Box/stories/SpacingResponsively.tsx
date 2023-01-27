/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function SpacingResponsively() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        pl={[
          'u2', // 8px spacing up to the first breakpoint
          'u4', // 15px spacing after first breakpoint
          'u8', // xlarge spacing after second breakpoint
          'u12', // xxxlarge spacing after third breakpoint
        ]}
      >
        My padding on the left changes with breakpoints
      </Box>
    </Space>
  )
}
