/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import { TreeCollection, TreeItem, Tree } from '..'
import { Grid } from '../../Layout/Grid'
import type { ListItemColor } from '../../ListItem'

interface BasicProps {
  children: ReactNode
  color?: ListItemColor
}

const Basic = ({ children, ...props }: BasicProps) => (
  <TreeCollection>
    <Tree label={children} defaultOpen {...props}>
      <Tree disabled label={<strong>Disabled Tree</strong>} defaultOpen>
        <TreeItem disabled>Disabled TreeItem</TreeItem>
        <TreeItem selected>Selected TreeItem</TreeItem>
      </Tree>
      <Tree selected label={<strong>Selected Tree</strong>} defaultOpen>
        <TreeItem disabled>Disabled TreeItem</TreeItem>
        <TreeItem selected>Selected TreeItem</TreeItem>
      </Tree>
    </Tree>
  </TreeCollection>
)

export default function DisabledAndSelected() {
  return (
    <Grid columns={3}>
      <Basic>
        <strong>Default</strong>
      </Basic>
      <Basic color="key">
        <strong>Key</strong>
      </Basic>
      <Basic color="calculation">
        <strong>Dimension</strong>
      </Basic>
    </Grid>
  )
}
