/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DialogContent, Box, Paragraph } from '../../../..'

export default function Overflow() {
  return (
    <Box height="10rem" display="flex" bg="white" p="u5">
      <DialogContent>
        <Paragraph>Scroll down here...</Paragraph>
        <Box height="12rem" bg="rebeccapurple" />
      </DialogContent>
    </Box>
  )
}
