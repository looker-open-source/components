/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function Customized() {
  return (
    <Space bg="ui3" m="u1">
      <Box display="inline">I'm inline.</Box>
      <Box display="inline">I'm also inline.</Box>
    </Space>
  )
}
