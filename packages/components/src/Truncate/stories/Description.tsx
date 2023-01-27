/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Truncate } from '../..'

export default function Description() {
  return (
    <Box maxWidth={500}>
      <Truncate description="This is pretty cheesy 🧀">
        <strong>Hover over text to see the description:</strong> Cheese is
        delicious.
      </Truncate>
    </Box>
  )
}
