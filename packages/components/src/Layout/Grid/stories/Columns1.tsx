/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Grid, Box } from '../../..'

export default function Columns1() {
  return (
    <Grid columns={1}>
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
      <Box border>C</Box>
      <Box border>D</Box>
    </Grid>
  )
}
