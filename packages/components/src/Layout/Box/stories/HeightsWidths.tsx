/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function HeightsWidths() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        display="inline-block"
        height="100px"
        bg="positive"
        color="inverseOn"
        p="u3"
        minWidth="200px"
      >
        I'm 100px tall.
      </Box>
      <Box
        display="inline-block"
        height="50px"
        bg="inform"
        color="inverseOn"
        ml="u3"
        p="u3"
        width="100px"
        fontSize="small"
      >
        I'm 50px tall.
      </Box>
    </Space>
  )
}
