/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function Borders() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        width="50px"
        height="50px"
        bg="keyAccent"
        border="ui3"
        borderRadius="4px"
      >
        I've got borders.
      </Box>
    </Space>
  )
}
