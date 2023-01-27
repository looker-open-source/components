/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Paragraph } from '@looker/components'
import { PopoverContent } from '../..'

export default function Scroll() {
  return (
    <Box height="10rem" display="flex" bg="white" p="u5">
      <PopoverContent>
        <Paragraph>Scroll down here...</Paragraph>
        <Box height="6rem" bg="rebeccapurple" />
      </PopoverContent>
    </Box>
  )
}
