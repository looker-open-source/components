/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Grid, Box } from '../../..'

export default function GapNone() {
  return (
    <Grid gap="none">
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
    </Grid>
  )
}
