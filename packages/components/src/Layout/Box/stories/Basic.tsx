/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Space, Box } from '../../..'

export default function Basic() {
  return (
    <Space around>
      <Box bg="white" p="u8">
        On White
      </Box>
      <Box bg="ui1" p="u8">
        On `ui1`
      </Box>
      <Box bg="ui2" p="u8">
        On `ui2`
      </Box>
    </Space>
  )
}
