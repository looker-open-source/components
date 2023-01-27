/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityProp, DensityRamp } from '@looker/design-tokens'
import React from 'react'
import { Tree } from '../Tree'
import { TreeCollection } from '../TreeCollection'
import { TreeItem } from '../TreeItem'
import { Grid } from '../../Layout'

export default function Density() {
  const DensityTree = ({ density }: DensityProp) => (
    <TreeCollection>
      <Tree defaultOpen density={density} label={<strong>Cheeses</strong>}>
        <Tree defaultOpen label={<strong>French</strong>}>
          <TreeItem>Brie</TreeItem>
        </Tree>
        <TreeItem>Cheddar</TreeItem>
        <TreeItem>Gouda</TreeItem>
        <TreeItem>Swiss</TreeItem>
      </Tree>
    </TreeCollection>
  )
  const densities: DensityRamp[] = [1, 0, -1, -2, -3]

  return (
    <Grid columns={densities.length}>
      {densities.map(density => (
        <DensityTree density={density} key={density} />
      ))}
    </Grid>
  )
}
