/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DateRange } from '@styled-icons/material-outlined'
import { Tree, TreeCollection, TreeItem } from '..'

export default function ColorfulTree() {
  return (
    <TreeCollection>
      <Tree defaultOpen label={<strong>Colorful Tree</strong>}>
        <TreeItem color="green" icon={<DateRange />}>
          Green TreeItem
        </TreeItem>
        <Tree
          color="blue"
          defaultOpen
          icon={<DateRange />}
          label={<strong>Blue Tree</strong>}
        >
          <TreeItem color="purple" icon={<DateRange />}>
            Purple TreeItem
          </TreeItem>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
