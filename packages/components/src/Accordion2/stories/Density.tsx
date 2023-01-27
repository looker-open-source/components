/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Accordion2, SpaceVertical, Grid } from '../..'

export default function Density() {
  return (
    <SpaceVertical>
      <Grid columns={5}>
        <Accordion2 defaultOpen density={1} label={`Density Example: 1`}>
          Content within accordion.
        </Accordion2>
        <Accordion2 defaultOpen density={0} label={`Density Example: 0`}>
          Content within accordion.
        </Accordion2>
        <Accordion2 defaultOpen density={-1} label={`Density Example: -1`}>
          Content within accordion.
        </Accordion2>
        <Accordion2 defaultOpen density={-2} label={`Density Example: -2`}>
          Content within accordion.
        </Accordion2>
        <Accordion2 defaultOpen density={-3} label={`Density Example: -3`}>
          Content within accordion.
        </Accordion2>
      </Grid>
    </SpaceVertical>
  )
}
