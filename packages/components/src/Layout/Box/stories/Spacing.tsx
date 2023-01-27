/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Space } from '../../..'

export default function Spacing() {
  return (
    <>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" m="u5">
          Margin All Sides - 20px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pl="u1">
          Padding left - 4px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pl="u4">
          Padding left - 16px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" my="u10" ml="u8">
          Margin Top & Bottom - 40px, Margin left - 32px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pb="u12" ml="u15">
          Padding Bottom - 48px, Margin left - 60px
        </Box>
      </Space>
    </>
  )
}
